import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { DeleteOutline } from '@mui/icons-material'
import styled from '@emotion/styled'
import axios from 'axios'
// import { axiosInstance } from '../../config/axiosInstance'

const Patients = () => {
   const initialPatients = [
      {
         id: 1,
         fullName: 'Айназик Бакытова',
         phoneNumber: '+996 707 123 456',
         email: 'ainazik@gmail.com',
         submissionDate: '12.01.2023',
      },
      {
         id: 2,
         fullName: 'Айназик Бакытова',
         phoneNumber: '+996 707 123 456',
         email: 'ainazik@gmail.com',
         submissionDate: '12.01.2023',
      },
      {
         id: 3,
         fullName: 'Айназик Бакытова',
         phoneNumber: '+996 707 123 456',
         email: 'ainazik@gmail.com',
         submissionDate: '12.01.2023',
      },
   ]

   const [patients, setPatients] = useState([initialPatients])
   const [filteredPatients, setFilteredPatients] = useState([])
   const [searchTerm, setSearchTerm] = useState('')
   const [isAdmin, setIsAdmin] = useState(true)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               'http://healthcheck.peaksoftprojects.com/swagger-ui/index.html#/Patient%20Api/getAll'
            )

            setPatients([...initialPatients, ...response.data])
            setFilteredPatients([...initialPatients, ...response.data])
         } catch (error) {
            console.error('Ошибка при получении данных', error)
         }
      }

      fetchData()
   }, [])

   useEffect(() => {
      const searchTermLowerCase = searchTerm.toLowerCase()

      const filteredPatients = patients.filter((patient) => {
         const fullName = patient.fullName || ''
         return fullName.toLowerCase().includes(searchTermLowerCase)
      })

      setFilteredPatients(filteredPatients)
   }, [searchTerm, patients])

   const handleDelete = async (id) => {
      try {
         await axios.delete(
            `http://healthcheck.peaksoftprojects.com/swagger-ui/index.html#/Patient%20Api/deletePatientById`
         )
         const updatedPatients = patients.filter((patient) => patient.id !== id)
         setPatients(updatedPatients)
         setFilteredPatients(updatedPatients)
      } catch (error) {
         console.error('Ошибка при удалении пациента', error)
      }
   }

   return (
      <TableContainer>
         <h3>Пациенты</h3>
         <StyledTextField
            placeholder="Поиск..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
               endAdornment: <StyledSearchIcon />,
            }}
         />
         <StyledTable>
            <thead>
               <tr>
                  <th>№</th>
                  <th>Имя Фамилия</th>
                  <th>Помер телефона</th>
                  <th>Почта</th>
                  <th>Дата сдачи </th>
                  {isAdmin && <th>Действия</th>}
               </tr>
            </thead>
            <StyledTableBody>
               {filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                     <td>{patient.id}</td>
                     <td>{patient.fullName}</td>
                     <td>{patient.phoneNumber}</td>
                     <td>{patient.email}</td>
                     <td>{patient.submissionDate}</td>
                     {isAdmin && (
                        <td>
                           <StyledDeleteButton
                              onClick={() => handleDelete(patient.id)}
                              disabled={!isAdmin}
                           >
                              <DeleteOutline />
                           </StyledDeleteButton>
                        </td>
                     )}
                  </tr>
               ))}
            </StyledTableBody>
         </StyledTable>
      </TableContainer>
   )
}

export default Patients

const TableContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   padding: '3rem',
   background: '#ECECEC',
   fontFamily: 'Manrope',
   '& h3': {
      fontSize: '22px',
      fontWeight: '400',
      paddingBottom: '2rem',
   },
}))

const StyledTextField = styled(TextField)(() => ({
   '& .MuiInputBase-root': {
      fontFamily: 'Manrope',
      height: '2.5rem',
      paddingLeft: '0.8rem',
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

const StyledTable = styled('table')(() => ({
   width: '100%',
   borderCollapse: 'collapse',
   borderRadius: '10px',
   marginTop: '2rem',
   background: '#ffff',
   '& th': {
      padding: '1rem',
      fontWeight: '500',
      fontSize: '14px',
      textAlign: 'left',
   },
}))

const StyledTableBody = styled('tbody')(() => ({
   borderTop: '2px solid #F5F5F5',
   textAlign: 'left',
   background: '#ffff',
   '& td': {
      padding: '1rem',
      fontWeight: '400',
      fontSize: '16px',
   },
   '& tr:nth-of-type(even) td': {
      background: '#F5F5F5',
   },
   '& tr:nth-of-type(odd) td': {
      background: '#FFFFFF',
   },
}))

const StyledDeleteButton = styled('button')(() => ({
   color: 'gray',
   cursor: 'pointer',
   border: 'none',
   background: 'none',
   paddingLeft: '3rem',
}))
