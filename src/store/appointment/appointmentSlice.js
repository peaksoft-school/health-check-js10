import { createSlice } from '@reduxjs/toolkit'
import {
   createAppointments,
   getAllDoctors,
   getCode,
   getDoctorsTimesheets,
} from './appointmentThunk'

const initialState = {
   doctors: [],
   doctorTimesheets: [],
   codeEmail: '',
   error: null,
   appointmentData: [],
}

export const appointmentSlice = createSlice({
   name: 'appointment',
   initialState,
   reducer: {},
   extraReducers: (builder) => {
      builder.addCase(getAllDoctors.fulfilled, (state, action) => {
         state.doctors = action.payload
      })
      builder
         .addCase(getDoctorsTimesheets.fulfilled, (state, action) => {
            state.doctorTimesheets = action.payload
         })
         .addCase(getDoctorsTimesheets.rejected, (state, action) => {
            state.error = action.payload
         })
         .addCase(getCode.fulfilled, (state, action) => {
            state.codeEmail = action.payload.message
         })
         .addCase(createAppointments.fulfilled, (state, action) => {
            state.appointmentData = action.payload
         })
   },
})

export const { getDoctors } = appointmentSlice.actions
