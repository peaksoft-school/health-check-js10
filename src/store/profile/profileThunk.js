import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notify } from '../../utils/constants/snackbar'

export const getProfileById = createAsyncThunk(
   '/api/patients/profile',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/patients/profile')
         return response.data
      } catch (error) {
         return rejectWithValue(error.response?.data.message)
      }
   }
)

export const updateProfile = createAsyncThunk(
   'patients/updateProfile',
   async (userData, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.put(
            '/api/patients/updateProfile',
            userData
         )
         console.log(response.data)
         return response.data
      } catch (error) {
         notify(error, 'error')
         return rejectWithValue(
            error.response?.data.message || 'Failed to update profile'
         )
      }
   }
)

export const updatePassword = createAsyncThunk(
   'authorization/updatePassword',
   async ({ oldPassword, newPassword }, { rejectWithValue }) => {
      try {
         await axiosInstance.put(
            `/api/patients/updatePassword?oldPassword=${oldPassword}&newPassword=${newPassword}`
         )
      } catch (error) {
         notify(error, 'error')
         rejectWithValue(
            error.response?.data.message || 'Failed to update profile'
         )
      }
   }
)
