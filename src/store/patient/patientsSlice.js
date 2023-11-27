import { createSlice } from '@reduxjs/toolkit'
import { fetchPatients, searchPatients } from './patientsThunk'

const patientSlice = createSlice({
   name: 'patients',
   initialState: {
      patients: [],
      loading: 'idle',
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPatients.pending, (state) => {
            state.loading = 'loading'
         })
         .addCase(fetchPatients.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.patients = action.payload
         })
         .addCase(fetchPatients.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
         })
         .addCase(searchPatients.pending, (state) => {
            state.loading = 'loading'
         })
         .addCase(searchPatients.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.patients = action.payload
         })
   },
})

export const selectPatients = (state) => state.patients.patients
export const selectPatientsLoading = (state) => state.patients.loading
export const selectPatientsError = (state) => state.patients.error

export default patientSlice.reducer
