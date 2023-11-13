import React from 'react'
import AppTable from './AppTable'
import { data } from './TableMap'
import { ReactComponent as DeleteIcon } from '../../assets/images/deleteX.svg'

export const Parents = () => {
   const columns = [
      { id: 'fullName', label: 'Выбор специалиста' },
      { id: 'date', label: 'Data' },
      { id: 'condition', label: 'Status' },
      { id: '', label: 'Очистить список заказов', icon: <DeleteIcon /> },
   ]
   return (
      <div>
         <AppTable data={data} columns={columns} />
      </div>
   )
}
