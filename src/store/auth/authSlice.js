import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY } from '../../utils/constants/constants'
import { routes } from '../../utils/constants/routes'
import { changePassword, forgotPassword, signIn, signUp } from './authThunk'

const initialState = {
   token: null,
   isAuth: false,
   role: null,
   email: null,
   error: '',
   isLoading: false,
}

const authActions = [signUp, forgotPassword, changePassword]

export const authSlice = createSlice({
   name: 'authorization',
   initialState,
   reducers: {
      login(state, action) {
         localStorage.setItem(USER_KEY, JSON.stringify(action.payload.data))
         state.isAuth = true
         state.role = action.payload.data.role
         state.token = action.payload.data.token
         state.email = action.payload.data.email
         action.payload.navigate(routes[action.payload.data.role].path)
      },
      logout() {
         const newState = initialState
         localStorage.removeItem(USER_KEY)
         return newState
      },
   },
   extraReducers: (builder) => {
      builder.addCase(signIn.fulfilled, (state) => {
         state.isAuth = true
      })

      authActions.forEach((action) => {
         builder
            .addCase(action.pending, (state) => {
               state.isLoading = true
            })
            .addCase(action.fulfilled, (state) => {
               state.isLoading = false
            })
            .addCase(action.rejected, (state, action) => {
               state.error = action.payload
               state.isLoading = false
            })
      })
   },
})

export const { login, register, logout } = authSlice.actions
