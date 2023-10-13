import { createAsyncThunk } from '@reduxjs/toolkit'
import { STORAGE_KEYS } from '../../../utils/constants/commons'
import { signInRequest, signUpRequest } from '../../../api/authService'

export const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ values, notify }, { rejectWithValue }) => {
      try {
         const { data } = await signInRequest(values)
         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         notify('Вы успешно вошли в аккаунт!', 'success')
         return data
      } catch (error) {
         notify(error.response?.data.message, 'error')
         return rejectWithValue(error.response?.data.message)
      }
   }
)

export const signUp = createAsyncThunk(
   'auth/signUp',
   async ({ values, notify }, { rejectWithValue }) => {
      try {
         const { data } = await signUpRequest(values)

         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         notify('Вы успешно зарегистрировались!', 'success')
         return data
      } catch (error) {
         notify(error.response?.data.message, 'error')
         return rejectWithValue(error.response?.data.message)
      }
   }
)

// export const forgotPassword = createAsyncThunk(
//    'auth/forgotPassword',
//    async (userData, { rejectWithValue }) => {
//       try {
//          const { data } = await forgotPassword(userData)
//          console.log(data)
//          return data
//       } catch (error) {
//          return rejectWithValue(error.response?.data.message)
//       }
//    }
// )

export const signOut = createAsyncThunk('auth/signOut', async (notify) => {
   notify('Вы вышли из аккаунта!', 'success')
   return localStorage.removeItem(STORAGE_KEYS.AUTH)
})
