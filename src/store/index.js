import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import patientReducer from './patient/patientsSlice'
import { applicationsSlice } from './applications/applicationsSlice'
import myappointmentsSlice from './myappointments/myappointmentsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      patients: patientReducer,
      [applicationsSlice.name]: applicationsSlice.reducer,
      myappointments: myappointmentsSlice,
   },
})
