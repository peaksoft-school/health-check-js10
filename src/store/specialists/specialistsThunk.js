import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notify } from '../../utils/constants/snackbar'

export const fetchSpecialists = createAsyncThunk(
   'specialists/fetchSpecialists',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/doctors')
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

export const searchSpecialists = createAsyncThunk(
   'specialists/searchSpecialists',
   async (word, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/doctors?word=${word}`)
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

export const deleteSpecialist = createAsyncThunk(
   'specialists/deleteSpecialist',
   async (doctorId, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(`/api/doctors/${doctorId}`)
         dispatch(fetchSpecialists())
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

export const getSpecialistsAsyncThunk = createAsyncThunk(
   'specialistsData/specialistsById',
   async ({ doctorId }, { dispatch, rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/doctors/${doctorId}`)
         //  dispatch(getSpecialistsResultThunk(doctorId))
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
