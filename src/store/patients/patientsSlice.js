import { createSlice } from '@reduxjs/toolkit'
import { patintsAsyncThunk } from './patientsThunk'

const initialState = {
   data: null,
   loading: false,
   error: null,
}

export const patientSlice = createSlice({
   name: 'patients',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(patintsAsyncThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(patintsAsyncThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
         })
         .addCase(patintsAsyncThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
