import axios from 'axios'
import { store } from '../store'
import { login } from '../store/auth/authSlice'
import { notify } from '../utils/constants/snackbar'

export const BASE_URL =
   'http://ec2-3-71-86-3.eu-central-1.compute.amazonaws.com'

const headers = {
   'Content-type': 'application/json',
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const userToken = store.getState().authorization.token
   //   const userToken = "ссылка с свагера";
   if (userToken) {
      updatedConfig.headers.Authorization = `Bearer ${userToken}`
   }
   return updatedConfig
})

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(login())
      } else if (error.response.status === 404) {
         notify('Пользователь с данной почтой не найден', 'error')
      }
   }
)
