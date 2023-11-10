import axios from 'axios'
import { store } from '../store'
import { login } from '../store/auth/authSlice'

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
   const token = store.getState().login.accessToken
   //   const token = "ссылка с свагера";
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
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
      }
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
