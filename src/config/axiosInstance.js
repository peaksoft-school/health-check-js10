import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

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
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDM1OTgwNjgsImlhdCI6MTcwMTc4MzY2OCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.hVW5IyFyCst0J2bU8SX1TSyP1B1aw7H4U2uySenAXEAzDJwvMNKrpvDXJ-6wcAyz3r3inIsBhDdyIwCzn5TDaQ'
   // const { token } = store.getState().authorization
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
      if (error?.code === 403) {
         store.dispatch(logout())
         throw new Error('Unauthotized')
      }
      return Promise.reject(error)
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
