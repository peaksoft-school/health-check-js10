import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { USER_KEY } from '../../utils/constants/constants'

export const loginQuery = createAsyncThunk(
   'authorization/login',
   async (
      { userInfo, login, navigate /* lessonId */ },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data } = await axiosInstance.post(
            '/auth/authorization',
            // `/auth/authorization?lessonId=${lessonId}`,
            {
               email: userInfo.login,
               password: userInfo.password,
            }
            // {
            //   params: {
            //     lessonId,
            //   },
            // }
         )
         //   const dataWithChangedRole = {
         //     ...data,
         //     userInfo: { ...data.userInfo, role: "USER" },
         //   };
         localStorage.setItem(USER_KEY, JSON.stringify(data))
         return dispatch(login({ data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
