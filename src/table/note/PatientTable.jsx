import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import styled from '@emotion/styled'

const PatientTable = () => {
   const columns = [
      {
         id: 1,
         name: 'Айназик',
         LastName: 'Бакытова',
         Email: 'ainazik@gmail.com',
         TelefonNumber: '+996 707 123 456',
         date: '23.01.23 ',
         oclock: '11:30',
         expert: 'Манак Елена',
         services: 'Дерматология',
      },
   ]

   return (
      <DivStyled>
         <h2>Мои записи</h2>
         <div className="box">
            <p>Статус</p>
            <button type="submit">Подтверждён</button>
         </div>

         <Table>
            <TableHead>
               {columns.map((column) => (
                  <TableRow className="TableData" key={column.id}>
                     <TableCell>{column.name}</TableCell>
                     <TableCell>{column.LastName}</TableCell>
                     <TableCell>{column.Email}</TableCell>
                     <TableCell>{column.TelefonNumber}</TableCell>
                     <TableCell>{column.date}</TableCell>
                     <TableCell>{column.oclock}</TableCell>
                     <TableCell>{column.expert}</TableCell>
                     <TableCell>{column.services}</TableCell>
                  </TableRow>
               ))}
            </TableHead>
         </Table>
      </DivStyled>
   )
}

export default PatientTable

const DivStyled = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '6.188rem',
   marginLeft: '7.5rem',
   '.box': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '2.5rem',
      '& button': {
         width: '162px',
         padding: '6px 10px',
         flexDirection: 'column',
         borderRadius: '6px',
         border: 'none',
         color: '#FFF',
         marginTop: '0.75rem',
         background: '#346EFB',
      },
   },
   '.TableData': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginTop: '0.75rem',
      width: '12.5rem',
      height: '19.5rem',
      borderRadius: '4px',
      color: '#222222',
      fontFamily: 'Manrope',
   },
}))
