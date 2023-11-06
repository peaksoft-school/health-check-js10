import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY, routes } from '../../utils/constants/constants'

const initialState = {
   token: null,
   isAuth: false,
   role: null,
   email: null,
}

const userData = localStorage.getItem(USER_KEY)
const parsedData = userData ? JSON.parse(userData) : null

const initialStateWithStoredData = {
   ...initialState,
   ...parsedData,
}

export const authSlice = createSlice({
   name: 'authorization',
   initialState: initialStateWithStoredData,
   reducers: {
      login(state, { payload: { data, navigate } }) {
         console.log(state)
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         state.isAuth = true
         state.role = data.role
         state.token = data.token
         state.email = data.email
         navigate(routes[data.role].path)
      },
      logout() {
         const newState = initialState
         localStorage.removeItem(USER_KEY)
         return newState
      },
   },
})

export const { login, logout } = authSlice.actions
