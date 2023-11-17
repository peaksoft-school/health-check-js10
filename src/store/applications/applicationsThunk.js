import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const applicationsThunk = createAsyncThunk(
   'applications/users',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/applications/getAll')
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const searchApplicationByIdAsyncThunk = createAsyncThunk(
   'applications/searchById',
   async (word, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/applications/word?word=${word}`
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error.message || 'Failed to fetch data')
      }
   }
)

export const fetchStatus = createAsyncThunk(
   'mySlice/fetchStatus',
   async ({ id, status }, { dispatch }) => {
      try {
         const response = await axiosInstance.post(
            `/api/applications?applicationId=${id}&isProceeded=${status}`
         )
         dispatch(applicationsThunk())
         return response.data
      } catch (error) {
         return error
      }
   }
)

export const deleteAsyncThunk = createAsyncThunk(
   'deleteAsyncThunk/applications',
   async (ids, { dispatch }) => {
      try {
         console.log(ids)
         const response = await axiosInstance.delete(`/api/applications`, {
            data: ids,
         })
         dispatch(applicationsThunk())
         return response.data
      } catch (error) {
         return error
      }
   }
)
