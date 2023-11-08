import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { USER_KEY } from '../../utils/constants/constants'
import { login } from './authSlice'
import { notify } from '../../utils/constants/snackbar'

export const signIn = createAsyncThunk(
   'authorization/login',
   async ({ values, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/signIn', {
            email: values.email,
            password: values.password,
         })
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вход успешно выполнен')
         return dispatch(login({ data, navigate }))
      } catch (error) {
         notify('Неправильный логин или пароль', 'error')
         return rejectWithValue(error)
      }
   }
)

export const signUp = createAsyncThunk(
   'authorization/signUp',
   async ({ values, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/signUp', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            password: values.password,
         })
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вы успешно зарегистрированы')
         return dispatch(login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const authWithGoogle = createAsyncThunk(
   'authorization/google',
   async ({ token, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/google', null, {
            params: { token },
         })
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вход через Google успешно выполнен')
         return dispatch(login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
