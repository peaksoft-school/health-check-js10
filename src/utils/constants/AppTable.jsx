/* eslint-disable no-nested-ternary */
import React from 'react'
import { Table, TableHead, TableRow, TableCell } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppTable = ({ columns, data }) => {
   return (
      <Container>
         <h2>Мои записи</h2>
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
                        {column.label}
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
                           >
                              <Link to={`${item.id}`}>
                                 {column.id === 'condition' ? (
                                    <StyledCondition
                                       condition={item[column.id]}
                                    >
                                       {item[column.id]?.length > 13
                                          ? `${item[column.id].substring(
                                               0,
                                               13
                                            )}...`
                                          : item[column.id]}
                                    </StyledCondition>
                                 ) : item[column.id]?.length > 13 ? (
                                    `${item[column.id].substring(0, 13)}...`
                                 ) : (
                                    item[column.id]
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
   marginLeft: '6rem',
   fontFamily: 'Manrope',
   fontSize: '1.3rem',
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
      paddingTop: '3rem',
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

export default AppTable
