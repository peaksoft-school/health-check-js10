import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { profileSlice } from './profile/profileSlice'
import patientReducer from './patient/patientsSlice'
import { applicationsSlice } from './applications/applicationsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      patients: patientReducer,
      [applicationsSlice.name]: applicationsSlice.reducer,
   },
})
