import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notify } from '../../utils/constants/snackbar'

export const getAllSchedules = createAsyncThunk(
   'schedule/getSchedules',
   async ({ dateFrom, dateUntil }, { rejectWithValue }) => {
      try {
         const params = {}
         if (dateFrom) params.dateFrom = dateFrom
         if (dateUntil) params.dateUntil = dateUntil

         const { data } = await axiosInstance.get('api/schedules', {
            params,
         })

         return data
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
