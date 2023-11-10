import { createSlice } from '@reduxjs/toolkit'
import { applicationsThunk } from './applicationsThunk'

const initialState = {
   application: [],
}

export const applicationsSlice = createSlice({
   name: 'applications',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(applicationsThunk.fulfilled, (state, { payload }) => {
         const newState = { ...state, application: payload }
         return newState
      })
   },
})
