import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { applicationsSlice } from './applications/applicationsSlice'
import { departmentSlice } from './department/departmentSlice'
import { patientSlice } from './patient/patientsSlice'
import { appointmentsSlice } from './appointments/adminAppointmentsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [applicationsSlice.name]: applicationsSlice.reducer,
      [patientSlice.name]: patientSlice.reducer,
      [departmentSlice.name]: departmentSlice.reducer,
      [appointmentsSlice.name]: appointmentsSlice.reducer,
   },
})
