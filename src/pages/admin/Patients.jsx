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
import { notify } from '../../utils/constants/snackbar'

const Patients = () => {
   const dispatch = useDispatch()
   const { patients, loading, error } = useSelector((state) => state.patients)
   const [searchTerm, setSearchTerm] = useState('')

   useEffect(() => {
      dispatch(fetchPatients())
   }, [dispatch])

   function debounce(func, delay) {
      let timer
      return function fn(...args) {
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
            <StyledBox>
               <StyledDeleteButton
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(patient.id)}
               >
                  <DeleteOutline />
               </StyledDeleteButton>
            </StyledBox>
         ),
      },
   ]

   const renderCellValue = (row, column) => {
      const value = row[column.id]
      if (value || value === 0) {
         return value
      }
      return '—'
   }

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
         {loading === 'loading' ? (
            <h1>Loading...</h1>
         ) : (
            <>
               {loading === 'failed' && <p>Error: {error}</p>}
               {loading === 'succeeded' && (
                  <AppTable
                     data={patients}
                     columns={columns}
                     renderCellValue={renderCellValue}
                  />
               )}
            </>
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
   paddingTop: 'calc(11vh + 3rem)',
   background: '#f5f5f5',
   fontFamily: 'Manrope',
   table: {
      width: '87rem',
   },
   'th:nth-child(1)': {
      width: '4%',
   },
   'th:nth-child(2)': {
      width: '27%',
   },
   'th:nth-child(3)': {
      width: '20%',
   },
   'th:nth-child(4)': {
      width: '10%',
   },
   'th:nth-child(5)': {
      width: '9%',
   },
   h3: {
      fontSize: '24px',
      fontWeight: '500',
      paddingBottom: '3rem',
   },
}))

const StyledBox = styled('div')(() => ({
   paddingLeft: '18rem',
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
}))
