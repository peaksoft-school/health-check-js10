import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutline } from '@mui/icons-material'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'
import AppTable from '../../components/UI/AppTable'
import { SearchIcon } from '../../assets'
import {
   fetchPatients,
   deletePatient,
   searchPatients,
} from '../../store/patient/patientsThunk'
import {
   selectPatients,
   selectPatientsLoading,
} from '../../store/patient/patientsSlice'
import { notify } from '../../utils/constants/snackbar'

const Patients = () => {
   const dispatch = useDispatch()
   const patients = useSelector(selectPatients)
   const loading = useSelector(selectPatientsLoading)
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
      { id: 'fullName', label: 'Имя Фамилия' },
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
         {loading === 'failed' && (
            <StyledError>
               <div>
                  <p>Не удалось получить данные пациентов.</p>
               </div>
            </StyledError>
         )}
         {loading === 'succeeded' && (
            <AppTable data={patients} columns={columns} variant="patients" />
         )}
      </TableContainer>
   )
}

export default Patients

const TableContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   minHeight: '100vh',
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
      '& .error': {
         color: 'red',
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

const StyledError = styled('div')(() => ({
   backgroundColor: 'white',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '200px',
   width: '800px',
   marginTop: 20,
   borderRadius: 20,
   '& > div': {
      textAlign: 'center',
      borderRadius: 20,
      padding: '20px',
      border: '1px solid red',
      backgroundColor: '#fae1e4',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      width: '100%',
   },
   '& > p': {
      color: '#ff0000',
      fontSize: '18px',
      fontWeight: 'bold',
   },
}))
