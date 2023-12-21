import React from 'react'
import { Table, TableHead, TableRow, TableCell } from '@mui/material'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppTable = ({ columns, data, renderCellValue }) => {
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
                           textAlign:
                              column.id === 'delete' && renderCellValue
                                 ? 'right'
                                 : 'left',
                        }}
                     >
                        {renderCellValue ? null : <span>{column.icon}</span>}
                        {column.label}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHeadStyle>
            <TableBodyStyle>
               {data?.map((item) => (
                  <TableRow key={item.id}>
                     {columns?.map((column) => {
                        const isRenderCell = column.render && renderCellValue

                        if (isRenderCell) {
                           return (
                              <TableCell key={column.id}>
                                 {column.render(item)}
                              </TableCell>
                           )
                        }

                        const cellValue = item[column.id]
                        const displayedValue =
                           cellValue !== undefined &&
                           cellValue !== null &&
                           cellValue !== ''
                              ? cellValue
                              : '-'

                        return (
                           <TableCell
                              key={column.id}
                              title={String(displayedValue)}
                              condition={item.condition}
                           >
                              {column.link ? (
                                 <Link to={`${item.id}`}>
                                    <StyledCondition
                                       condition={item[column.id]}
                                    >
                                       {renderCellValue
                                          ? renderCellValue(item, column)
                                          : displayedValue}
                                    </StyledCondition>
                                 </Link>
                              ) : (
                                 <StyledCondition condition={item[column.id]}>
                                    {renderCellValue
                                       ? renderCellValue(item, column)
                                       : displayedValue}
                                 </StyledCondition>
                              )}
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
   borderRadius: '10px 10px 0px 0px',
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

export default AppTable
