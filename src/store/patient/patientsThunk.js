import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notify } from '../../utils/constants/snackbar'

export const fetchPatients = createAsyncThunk(
   'patients/fetchPatients',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/patients')
         return response.data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)

export const deletePatient = createAsyncThunk(
   'patients/deletePatient',
   async (patientId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/patients/${patientId}`
         )
         return [...response.data]
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)

export const searchPatients = createAsyncThunk(
   'patients/searchPatients',
   async (searchTerm, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/patients', {
            params: { searchTerm },
         })
         return response.data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)
