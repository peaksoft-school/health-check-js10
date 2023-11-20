import React, { useState } from 'react'
import { styled } from '@mui/material'
import Button from '../../components/UI/Button'
import { PlusIcon } from '../../assets'
import Modal from '../../components/UI/Modal'

export const PatientsInternalPage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleOpenModal = () => {
      setIsModalOpen(true)
   }

   const handleCloseModal = () => {
      setIsModalOpen(false)
   }

   //    const patients = [
   //     {
   //         id:"id", label:
   //     }
   //    ]
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
