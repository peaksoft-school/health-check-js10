import { createSlice } from '@reduxjs/toolkit'
import {
   deleteDoctorThunk,
   doctorsAllThunk,
   doctorsSearchThunk,
   spesialistThunk,
   statusDoctorThunk,
} from './spesialistThunk'

const initialState = {
   doctors: [],
   doctor: [],
   selectedDoctorId: null,
   selectedDoctor: null,
}

export const spesialistSlice = createSlice({
   name: 'doctors',
   initialState,
   reducers: {
      setSelectedDoctorId: (state, action) => {
         state.selectedDoctorId = action.payload
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(doctorsAllThunk.fulfilled, (state, action) => {
            state.doctors = Array.isArray(action.payload)
               ? action.payload
               : [action.payload]
         })
         .addCase(spesialistThunk.fulfilled, (state, action) => {
            state.selectedDoctor = action.payload
         })

         .addCase(doctorsSearchThunk.fulfilled, (state, action) => {
            state.doctor = action.payload
            state.doctors = action.payload
         })

         .addCase(deleteDoctorThunk.fulfilled, (state, action) => {
            state.doctor = []
         })

         .addCase(statusDoctorThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(statusDoctorThunk.fulfilled, (state, action) => {
            state.loading = false
            state.status = action.payload
         })
         .addCase(statusDoctorThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export const { setSelectedDoctorId } = spesialistSlice.actions

export default spesialistSlice.reducer
