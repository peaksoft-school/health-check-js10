import React from 'react'
import { Table, TableHead, TableRow, TableCell } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppTable = ({ columns, data, variant }) => {
   const getStatusColor = (status) => {
      switch (status) {
         case 'confirmed':
            return 'green'
         case 'prohibited':
            return 'blue'
         case 'canceled':
            return 'red'
         default:
            return ''
      }
   }

   if (data.length === 0) {
      return (
         <StyledError>
            <div>
               <p>
                  {variant === 'patients' && 'Не удалось найти пациентов.'}
                  {variant === 'appointments' && 'Не удалось найти записей.'}
               </p>
            </div>
         </StyledError>
      )
   }

   return (
      <Container>
         <Table className="navlink">
            <TableHeadStyle>
               <TableRow className="tableOne">
                  {columns.map((column) => (
                     <TableCell
                        key={column.id}
                        style={{
                           fontWeight: 'bold',
                        }}
                     >
                        <span>{column.icon}</span>
                        <div>{column.label}</div>
                     </TableCell>
                  ))}
               </TableRow>
            </TableHeadStyle>
            <TableBodyStyle>
               {data?.map((item) => (
                  <TableRow key={item.id}>
                     {columns?.map((column) => {
                        if (column.render) {
                           return column.render(item)
                        }
                        return (
                           <TableCell
                              key={column.id}
                              title={String(item[column.id])}
                              condition={item.condition}
                              className={`status ${getStatusColor(
                                 item[column.id]
                              )}`}
                           >
                              <Link to={`${item.id}`}>
                                 <StyledCondition condition={item[column.id]}>
                                    {item[column.id]?.length > 13
                                       ? `${item[column.id].substring(
                                            0,
                                            13
                                         )}...`
                                       : item[column.id]}
                                 </StyledCondition>
                                 {Array.isArray(column.ids) && (
                                    <div
                                       style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          lineHeight: '1.5',
                                       }}
                                    >
                                       {column.ids.map((id) => (
                                          <span key={id}>
                                             {data?.[0]?.[id]}
                                             <br />
                                          </span>
                                       ))}
                                    </div>
                                 )}
                              </Link>
                           </TableCell>
                        )
                     })}
                  </TableRow>
               ))}
            </TableBodyStyle>
         </Table>
      </Container>
   )
}
const Container = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '3rem',
   // marginLeft: '6rem',
   fontFamily: 'Manrope',
   fontSize: '1.3rem',
   borderTopLeftRadius: '10px',
   borderTopRightRadius: '10px',
   background: '#ffff',
   '& h2': {
      display: 'flex',
      marginLeft: '0.6rem',
   },
})

const TableHeadStyle = styled(TableHead)(() => ({
   '.MuiTableCell-root ': {
      width: '160px',
      fontFamily: 'Manrope',
      height: '41px',
      // paddingTop: '3rem',
      flexShrink: '0',
      fontDize: '0.8rem',
      color: '#222222',
      marginTop: '1rem',
   },
}))

const TableBodyStyle = styled(TableHead)(() => ({
   '.MuiTableCell-root': {
      width: '10px',
      marginTop: '1rem',
      paddingRight: '0.8rem',
      fontFamily: 'Manrope',
      height: '41px',
      fontDize: '0.8rem',
      background: '#ffff',
   },
}))

const getConditionColor = (condition) => {
   switch (condition) {
      case 'Отменён':
         return 'red'
      case 'Подтверждён':
         return 'green'
      case 'Завершён':
         return 'blue'
      default:
         return 'black'
   }
}
const StyledCondition = styled.span(({ condition }) => ({
   color: getConditionColor(condition),
}))

const StyledError = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   minHeight: '200px',
   width: '800px',
   '& > div': {
      textAlign: 'center',
      borderRadius: 20,
      padding: '20px',
      border: '1px solid gray',
      backgroundColor: '#cfcaca',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      width: '100%',
   },
   '& > p': {
      color: 'gray',
      fontSize: '18px',
      fontWeight: 'bold',
   },
}))
export default AppTable
