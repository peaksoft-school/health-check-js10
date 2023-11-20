import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import Button from '../../components/UI/Button'
import { PlusIcon } from '../../assets'
import Modal from '../../components/UI/Modal'
import { patintsAsyncThunk } from '../../store/patients/patientsThunk'

export const PatientsInternalPage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(patintsAsyncThunk())
      console.log(patintsAsyncThunk())
   }, [])

   const handleOpenModal = () => {
      setIsModalOpen(true)
   }

   const handleCloseModal = () => {
      setIsModalOpen(false)
   }

   const patients = [
      {
         id: 'firstName',
         label: 'Имя',
      },
      {
         id: 'lastName',
         label: 'Фамилия',
      },
      {
         id: 'email',
         label: 'Email',
      },
      {
         id: 'phoneNumber',
         label: 'Номер телефона',
      },
   ]
   return (
      <StyleBgPatients>
         <PatintsTitleStyle>
            <p>Айназик Бакытова</p>
            <Button
               className="customButtonStyle"
               startIcon={<PlusIcon />}
               onClick={handleOpenModal}
            >
               ДОБАВИТЬ РЕЗУЛЬТАТЫ
            </Button>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
               A
            </Modal>
         </PatintsTitleStyle>
         <StylePatientsData>d</StylePatientsData>
      </StyleBgPatients>
   )
}

const StyleBgPatients = styled('div')`
   background-color: #f5f5f5;
   padding: 7rem 4%;
   height: 100vh;
`
const PatintsTitleStyle = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      font-size: 22px;
      font-weight: 400;
   }
   .customButtonStyle {
      width: 18rem;
   }
`
const StylePatientsData = styled('div')`
   background-color: #fff;
   border-radius: 8px;
   margin-top: 20px;
   padding: 20px;
   height: 100%;
`
