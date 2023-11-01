import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import styled from 'styled-components'
import DrElenaImage from '../../assets/images/drElena.png'
import deleteX from '../../assets/images/deleteX.svg'

const statusColor = {
   Отменён: '#F91515',
   Подтверждён: '#346EFB',
   Завершён: '#07AB53',
}

const AppTable = () => {
   const columns = [
      {
         title: 'Выбор специалиста',
         id: 1,
      },
      {
         title: 'Дата и время',
         id: 2,
      },
      {
         title: 'Статус',
         id: 3,
      },
      {
         title: 'Очистить список заказов',
         img: deleteX,
         id: 4,
      },
   ]
   const data = [
      {
         id: 1,
         img: DrElenaImage,
         fullName: 'Манак Елена',
         career: 'Окулист',
         date: '12.01.2023',
         oclock: '15:00',
         condition: 'Отменён',
      },
      {
         id: 2,
         img: DrElenaImage,
         fullName: 'Манак Елена',
         career: 'Окулист',
         date: '12.01.2023',
         oclock: '15:00',
         condition: 'Подтверждён',
      },
      {
         id: 3,
         img: DrElenaImage,
         fullName: 'Манак Елена',
         career: 'Окулист',
         date: '12.01.2023 ',
         oclock: '15:00',
         condition: 'Завершён',
      },
   ]

   return (
      <DivStyled>
         <h2>Мои записи</h2>
         <Table className="navlink">
            <TableHead>
               <TableRow>
                  {columns.map((column, index) => (
                     <TableCell className="tableOne" key={column.id}>
                        {index === columns.length - 1 && (
                           <img src={column.img} alt="delete icon" />
                        )}
                        {column.title}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((item) => (
                  <TableRow key={item.index}>
                     <StyledTableCell>
                        <div>
                           <img src={item.img} alt={item.fullName} />
                        </div>

                        <StyledContainer>
                           {item.fullName}
                           <span className="profeshion">{item.career}</span>
                        </StyledContainer>
                     </StyledTableCell>

                     <TableCell>
                        {item.date}
                        <div>{item.oclock}</div>
                     </TableCell>
                     <TableCell>
                        <StyledStatusContainer status={item.condition}>
                           {item.condition}
                        </StyledStatusContainer>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </DivStyled>
   )
}

const StyledContainer = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   fontSize: '0.780rem',
})

const StyledStatusContainer = styled('div')(({ status }) => ({
   color: statusColor[status],
}))

const StyledTableCell = styled(TableCell)({
   display: 'flex !important',
   alignItems: 'center',
   gap: '10px',
   fontFamily: 'Manrope',
   color: '#222222',
   marginTop: '0.7rem',
   '.profeshion': {
      fontSize: '0.785rem',
      color: 'grey',
   },
})

const DivStyled = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '4.rem',
   marginLeft: '7.5rem',
   fontFamily: 'Manrope',
   fontSize: '1.5rem',

   '& h2': { marginLeft: '0.6rem' },
   '.navlink': { marginTop: '1.688rem' },
   '.tableOne': {
      width: '160px',
      fontFamily: 'Manrope',
      height: '41px',
      flexShrink: '0',
      fontSize: '0.800rem',
      color: '#222222',
      '.css-1oypvv3-MuiTableCell-root': { color: 'red' },
   },
}))

export default AppTable
