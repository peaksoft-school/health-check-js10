import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const patintsAsyncThunk = createAsyncThunk(
   'patientsData/patientsById',
   async ({ patientId }) => {
      try {
         const response = await axiosInstance.get(`/api/patients/${patientId}`)
         return response.data
      } catch (error) {
         return error
      }
   }
)
