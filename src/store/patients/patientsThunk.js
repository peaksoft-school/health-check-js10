import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const patientsAsyncThunk = createAsyncThunk(
   'patientsData/patientsById',
   async ({ patientId }) => {
      try {
         const response = await axiosInstance.get(`/api/patients/${patientId}`)
         console.log(response, 'response')
         return response.data
      } catch (error) {
         return error
      }
   }
)
