import { createSlice } from '@reduxjs/toolkit'
import {
   getPatientsAsyncThunk,
   getPatientsResultThunk,
   postPatientsResultThunk,
} from './patientsThunk'

const initialState = {
   data: null,
   result: [],
   loading: false,
   error: null,
}

export const patientSlice = createSlice({
   name: 'patients',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPatientsAsyncThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(getPatientsAsyncThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
         })
         .addCase(getPatientsAsyncThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(postPatientsResultThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(postPatientsResultThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.result = action.payload
         })
         .addCase(postPatientsResultThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
            console.error(action.error)
         })
         .addCase(getPatientsResultThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.result = action.payload
         })
   },
})
