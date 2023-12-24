import { createSlice } from '@reduxjs/toolkit'
import {
   deleteSpecialist,
   fetchSpecialists,
   getSpecialistsAsyncThunk,
   searchSpecialists,
} from './specialistsThunk'

export const specialistsSlice = createSlice({
   name: 'specialists',
   initialState: {
      doctors: [],
      data: null,
      results: [],
      isLoading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchSpecialists.pending, (state) => {
            state.isLoading = true
         })
         .addCase(fetchSpecialists.fulfilled, (state, action) => {
            state.isLoading = false
            state.doctors = action.payload
         })
         .addCase(fetchSpecialists.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
         .addCase(searchSpecialists.pending, (state) => {
            state.isLoading = true
         })
         .addCase(searchSpecialists.fulfilled, (state, action) => {
            state.isLoading = false
            state.doctors = action.payload
         })
         .addCase(deleteSpecialist.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(deleteSpecialist.fulfilled, (state, action) => {
            state.isLoading = false
            state.doctors = state.doctors.filter(
               (app) => app.id !== action.payload
            )
         })
         .addCase(deleteSpecialist.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
         })
         .addCase(getSpecialistsAsyncThunk.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getSpecialistsAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
         })
         .addCase(getSpecialistsAsyncThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
         })
      //  .addCase(postdoctorsResultThunk.pending, (state) => {
      //     state.isLoading = true
      //  })
      //  .addCase(postdoctorsResultThunk.fulfilled, (state) => {
      //     state.isLoading = false
      //  })
      //  .addCase(postdoctorsResultThunk.rejected, (state, action) => {
      //     state.isLoading = false
      //     state.error = action.error.message
      //  })
      //  .addCase(getdoctorsResultThunk.fulfilled, (state, action) => {
      //     state.isLoading = false
      //     state.results = action.payload
      //  })
   },
})

export const selectDoctors = (state) => state.specialists.doctors
export const selectDoctorsLoading = (state) => state.specialists.isLoading
export const selectDoctorsError = (state) => state.specialists.error
