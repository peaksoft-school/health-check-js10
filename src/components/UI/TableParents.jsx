import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppTable from './AppTable'
import { ReactComponent as DeleteIcon } from '../../assets/images/deleteX.svg'
import { fetchMyAppointments } from '../../store/myappointments/myappointmentsThunk'

export const TableParents = () => {
   const dispatch = useDispatch()
   const myAppointmentsData = useSelector((state) => state.myappointments.data)
   const status = useSelector((state) => state.myappointments.status)

   useEffect(() => {
      if (status === 'idle') {
         dispatch(fetchMyAppointments())
      }
   }, [dispatch, status])

   const columns = [
      { ids: ['doctorFullName', 'position'], label: 'Выбор специалиста' },
      { ids: ['localDate', 'time'], label: 'Дата и время' },
      { id: 'status', label: 'Статус' },
      { id: '', label: 'Очистить список заказов', icon: <DeleteIcon /> },
   ]

   return (
      <div>
         <h2>Мои записи</h2>
         <AppTable
            data={myAppointmentsData}
            columns={columns}
            variant="appointments"
         />
      </div>
   )
}
