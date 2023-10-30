import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import drElena from '../../assets/images/drElena.png'
// import deleteX from '../../assets/images/deleteX.svg'

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
         img: 'deleteX',
         id: 4,
      },
   ]
   const data = [
      {
         id: 1,
         img: drElena,
         fullName: 'Манак Елена',
         career: 'Окулист',
         date: '12.01.2023',
         oclock: '15:00',
         condition: 'Отменён',
      },
      {
         id: 2,
         img: drElena,
         fullName: 'Манак Елена',
         career: 'Окулист',
         date: '12.01.2023',
         oclock: '15:00',
         condition: 'Подтверждён',
      },
      {
         id: 3,
         img: drElena,
         fullName: 'Манак Елена',
         career: 'Окулист',
         date: '12.01.2023 ',
         oclock: '15:00',
         condition: 'Завершён',
      },
   ]

   return (
      <div>
         <h2>Мои записи</h2>
         <Table>
            <TableHead>
               <TableRow>
                  {columns.map((column) => (
                     <TableCell key={column.id}>
                        {column.title}
                        {/* <TableCell>
                           <img src={column.img2} alt={column} />
                        </TableCell> */}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>
                        <img src={item.img} alt={item} />
                        {item.fullName}
                        <TableCell>{item.career}</TableCell>
                     </TableCell>

                     <TableCell>
                        {item.date}
                        <TableCell>{item.oclock}</TableCell>
                     </TableCell>
                     <TableCell>{item.condition}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   )
}

export default AppTable
