import axios from 'axios'
import { BASE_URL } from './axiosInstance'

export const fileAxiosInstanse = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})

let store
export const injectStoreFile = (_store) => {
   store = _store
}

fileAxiosInstanse.interceptors.request.use(
   (config) => {
      const configUpdate = { ...config }
      //   const { token } = store.getState().auth
      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDIzNzU4NjksImlhdCI6MTcwMDU2MTQ2OSwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.ApjUl3BoR4PV_90WhVb_5rRUaO0CKkV4YiIq9pfA7U1kGcVQmELDMlX-b-WWRl-MkZvLSRMQGHRbWhYTFuhK3g'
      if (token) {
         configUpdate.headers.Authorization = `Bearer ${token}`
      }

      return configUpdate
   },
   (error) => {
      return Promise.reject(error)
   }
)

fileAxiosInstanse.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response?.status === 401) {
         throw new Error('401 unauthotized')
      }
      return Promise.reject(error)
   }
)
