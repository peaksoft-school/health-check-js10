import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const applicationsThunk = createAsyncThunk(
   'applications/users',
   async ({ rejectWithValue }) => {
      try {
         console.log('hello')
         const response = await axiosInstance.get('/api/applications/getAll')
         console.log(response)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
