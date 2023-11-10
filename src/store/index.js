import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { applicationsSlice } from './applications/applicationsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [applicationsSlice.name]: applicationsSlice.reducer,
   },
})
