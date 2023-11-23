import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { profileSlice } from './profile/profileSlice'
import { applicationsSlice } from './applications/applicationsSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [applicationsSlice.name]: applicationsSlice.reducer,
   },
})
