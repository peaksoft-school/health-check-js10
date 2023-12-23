import { createSlice } from '@reduxjs/toolkit'
import { getProfileById } from './profileThunk'

const initialState = {
   firstName: '',
   lastName: '',
   email: '',
   phoneNumber: '',
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProfileById.fulfilled, (state, action) => {
         return { ...action.payload }
      })
   },
})

export const updateProfile = createSlice({
   name: 'updateProfile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(updateProfile.fulfilled, (state, action) => {
         return { ...state, ...action.payload }
      })
   },
})
