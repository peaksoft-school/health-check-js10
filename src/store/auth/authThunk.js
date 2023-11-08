import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { USER_KEY } from '../../utils/constants/constants'
import { login } from './authSlice'
import { notify } from '../../utils/constants/snackbar'

export const signIn = createAsyncThunk(
   'authorization/login',
   async (
      { values, navigate /* lessonId */ },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data } = await axiosInstance.post(
            '/api/auth/signIn',
            // `/api/auth/signIn?lessonId=${lessonId}`,
            {
               email: values.email,
               password: values.password,
            }
            // {
            //   params: {
            //     lessonId,
            //   },
            // }
         )
         //   const dataWithChangedRole = {
         //     ...data,
         //     values: { ...data.values, role: "USER" },
         //   };
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
   async (
      { values, login, navigate /* lessonId */ },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data } = await axiosInstance.post(
            '/api/auth/signUp',
            // `/api/auth/signUp?lessonId=${lessonId}`,
            {
               firstName: values.firstName,
               lastName: values.lastName,
               email: values.email,
               phoneNumber: values.phoneNumber,
               password: values.password,
            }
            // {
            //   params: {
            //     lessonId,
            //   },
            // }
         )
         //   const dataWithChangedRole = {
         //     ...data,
         //     values: { ...data.values, role: "USER" },
         //   };
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         notify('Вы успешно зарегистрированы')
         return dispatch(login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
