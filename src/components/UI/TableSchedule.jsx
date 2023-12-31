import styled from '@emotion/styled'
import { styled as muiStyle } from '@mui/material/styles'

import {
   Grid,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

import React from 'react'

const TableSchedule = ({
   rows,
   columns,
   tableCellStyle = true,
   onCellClick,
   selectedCell,
}) => {
   return (
      <Grid>
         <PaperStyled>
            <TableContainer>
               <Table aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        {columns.map((column) => (
                           <TableCell
                              key={`header-${column.key}`}
                              align={column.align || 'left'}
                              style={
                                 column.minWidth
                                    ? { minWidth: column.minWidth }
                                    : {}
                              }
                           >
                              <TableHeaderStyled>
                                 {column.header}
                              </TableHeaderStyled>
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  {tableCellStyle ? (
                     <TableBody>
                        {rows.map((row, rowIndex) => {
                           return (
                              <TableRow key={row.id || row.appointmentId}>
                                 {columns.map((column, colIndex) => {
                                    if (column.render) {
                                       return (
                                          <TableCell
                                             key={column.key}
                                             style={{
                                                color: row.isActive
                                                   ? ''
                                                   : '#C9C9C9',
                                                border:
                                                   selectedCell.rowIndex ===
                                                      rowIndex &&
                                                   selectedCell.date ===
                                                      column.key
                                                      ? '2px solid #1f6ed4'
                                                      : '1px solid #d9d9d9',
                                             }}
                                             onClick={() =>
                                                colIndex !== 0 &&
                                                onCellClick(
                                                   row,
                                                   rowIndex,
                                                   column.key
                                                )
                                             }
                                          >
                                             {column.render(row)}
                                          </TableCell>
                                       )
                                    }
                                    const value = column.index
                                       ? rowIndex + 1
                                       : row[column.key]
                                    return (
                                       <StyledTableCell
                                          key={`row-${column.key}`}
                                          align={column.align}
                                          isActive={row.isActive}
                                       >
                                          <TableBodyTitleStyled>
                                             {value}
                                          </TableBodyTitleStyled>
                                       </StyledTableCell>
                                    )
                                 })}
                              </TableRow>
                           )
                        })}
                     </TableBody>
                  ) : (
                     <TableBody>
                        {rows.map((row, rowIndex) => {
                           return (
                              <StyledTableRow
                                 key={row.id.toString()}
                                 isActive={row.isActive}
                              >
                                 {columns.map((column) => {
                                    if (column.render) {
                                       return (
                                          <TableCell key={column.key}>
                                             {column.render(row)}
                                          </TableCell>
                                       )
                                    }
                                    const value = column.index
                                       ? rowIndex + 1
                                       : row[column.key]
                                    return (
                                       <TableCell
                                          key={`row-${column.key}`}
                                          align={column.align}
                                       >
                                          <TableBodyTitleStyled>
                                             {value}
                                          </TableBodyTitleStyled>
                                       </TableCell>
                                    )
                                 })}
                              </StyledTableRow>
                           )
                        })}
                     </TableBody>
                  )}
               </Table>
            </TableContainer>
         </PaperStyled>
      </Grid>
   )
}

export default TableSchedule

const StyledTableCell = styled(TableCell)(({ isActive = true }) => ({
   color: isActive ? '' : '#C9C9C9',
}))

const StyledTableRow = muiStyle(TableRow)(({ theme, isActive = true }) => ({
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.primary.backgroundAdmin,
   },
   color: isActive ? '' : '#C9C9C9',
}))
const PaperStyled = styled(Paper)`
   width: 100%;
   overflow: hidden;
   margin: 0 auto;
   height: 100%;
`
const TableHeaderStyled = styled('h3')`
   font-family: 'Manrope';
   font-weight: 600;
   font-size: 14px;
   line-height: 19px;
   text-transform: capitalize;
`

const TableBodyTitleStyled = styled('p')`
   font-family: 'Manrope';
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
`
