import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { appointmentSlice } from './appointment/appointmentSlice'
import { applicationsSlice } from './applications/applicationsSlice'
import myappointmentsSlice from './myappointments/myappointmentsSlice'
import { departmentSlice } from './department/departmentSlice'
import { patientSlice } from './patient/patientsSlice'
import { resultSlice } from './getresult/resultSlice'
import { appointmentsSlice } from './appointments/adminAppointmentsSlice'
import { scheduleSlice } from './schedule/scheduleSlice'
import { specialistsSlice } from './spesialists/specialistsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [appointmentSlice.name]: appointmentSlice.reducer,
      [applicationsSlice.name]: applicationsSlice.reducer,
      myappointments: myappointmentsSlice,
      [patientSlice.name]: patientSlice.reducer,
      [departmentSlice.name]: departmentSlice.reducer,
      [specialistsSlice.name]: specialistsSlice.reducer,
   },
})
