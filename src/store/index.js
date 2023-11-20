import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import patientReducer from './patient/patientsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      patients: patientReducer,
   },
})
