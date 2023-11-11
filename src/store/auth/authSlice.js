import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY, routes } from '../../utils/constants/constants'
import { signIn } from './authThunk'

const initialState = {
   token: null,
   isAuth: false,
   role: null,
   email: null,
   error: '',
}

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
      builder.addCase(signIn.rejected, (state, action) => {
         state.error = action.payload
      })
   },
})

export const { login, register, logout } = authSlice.actions
