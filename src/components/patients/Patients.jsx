import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutline } from '@mui/icons-material'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'
import AppTable from '../UI/AppTable'
import { SearchIcon } from '../../assets'
import {
   fetchPatients,
   deletePatient,
   searchPatients,
} from '../../store/patient/patientsThunk'
import {
   selectPatients,
   selectPatientsLoading,
   selectPatientsError,
} from '../../store/patient/patientsSlice'
import { notify } from '../../utils/constants/snackbar'

const PatientComponent = () => {
   const dispatch = useDispatch()
   const patients = useSelector(selectPatients)
   const loading = useSelector(selectPatientsLoading)
   const error = useSelector(selectPatientsError)
   const [searchTerm, setSearchTerm] = useState('')

   useEffect(() => {
      dispatch(fetchPatients())
   }, [dispatch])

   function debounce(func, delay) {
      let timer
      // eslint-disable-next-line func-names
      return function (...args) {
         clearTimeout(timer)
         timer = setTimeout(() => {
            func.apply(this, args)
         }, delay)
      }
   }

   const debouncedSearch = debounce((input) => {
      dispatch(searchPatients(input))
   }, 2000)

   const handleInputChange = (e) => {
      const input = e.target.value
      setSearchTerm(input)
      debouncedSearch(input)
   }

   const handleDelete = async (patientId) => {
      try {
         await dispatch(deletePatient(patientId))
         dispatch(fetchPatients())
      } catch (error) {
         notify('Ошибка при удалении пациента', 'error')
      }
   }

   const columns = [
      { id: 'id', label: '№' },
      { id: 'fullname', label: 'Имя Фамилия' },
      { id: 'phoneNumber', label: 'Номер телефона' },
      { id: 'email', label: 'Почта' },
      { id: 'date', label: 'Дата сдачи' },
      {
         id: 'delete',
         label: 'Действия',
         render: (patient) => (
            <StyledDeleteButton
               variant="outlined"
               color="error"
               onClick={() => handleDelete(patient.id)}
            >
               <DeleteOutline />
            </StyledDeleteButton>
         ),
      },
   ]

   return (
      <TableContainer>
         <h3>Пациенты</h3>
         <StyledTextField
            placeholder="Поиск..."
            variant="outlined"
            value={searchTerm}
            onChange={handleInputChange}
            InputProps={{
               endAdornment: <StyledSearchIcon />,
            }}
         />
         {loading === 'failed' && <p>Error: {error}</p>}
         {loading === 'succeeded' && (
            <AppTable data={patients} columns={columns} />
         )}
      </TableContainer>
   )
}

export default PatientComponent

const TableContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   padding: '4rem',
   background: '#ECECEC',
   fontFamily: 'Manrope',
   '& h3': {
      fontSize: '22px',
      fontWeight: '400',
      paddingBottom: '3rem',
   },
}))

const StyledTextField = styled(TextField)(() => ({
   '& .MuiInputBase-root': {
      fontFamily: 'Manrope',
      height: '2.5rem',
      paddingLeft: '1rem',
      width: '35rem',
      background: '#ffff',
      borderRadius: '50px',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: '#F5F5F5',
      },
      '&:hover fieldset': {
         borderColor: 'gray',
      },
      '&.Mui-focused fieldset': {
         borderColor: 'gray',
      },
      '& input': {
         boxSizing: 'border-box',
      },
   },
}))

const StyledSearchIcon = styled(SearchIcon)(() => ({
   color: 'gray',
}))

const StyledDeleteButton = styled('button')(() => ({
   color: 'gray',
   cursor: 'pointer',
   border: 'none',
   background: 'none',
   paddingLeft: '3rem',
}))
