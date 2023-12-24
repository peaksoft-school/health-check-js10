import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notify } from '../../utils/constants/snackbar'
import { fileAxiosInstanse } from '../../config/fileAxiosInstanse'

export const doctorsAllThunk = createAsyncThunk(
   'doctorsAll/doctors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/doctors')
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const spesialistThunk = createAsyncThunk(
   'spesialist/doctors',
   async (doctorId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/doctors/${doctorId}`)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message || 'Failed to fetch doctor data')
      }
   }
)

export const doctorsSearchThunk = createAsyncThunk(
   'doctorsSearch/doctorsWord',
   async (value, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.get(
            `/api/doctors/word?word=${value}`
         )
         if (!value) {
            dispatch(doctorsAllThunk())
         }
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const deleteDoctorThunk = createAsyncThunk(
   'doctorsDelete/doctorsDeleteId',
   async (doctorId, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.delete(`/api/doctors/${doctorId}`)
         return dispatch(doctorsAllThunk())
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const statusDoctorThunk = createAsyncThunk(
   'doctorsStatus/doctorsStatusId',
   async ({ doctorId, value }, { dispatch }) => {
      try {
         const response = await axiosInstance.put(
            `/api/doctors/status?doctorId=${doctorId}&isActive=${value}`
         )
         dispatch(doctorsAllThunk())
         return response.data
      } catch (error) {
         return error
      }
   }
)

export const changeDoctorThunk = createAsyncThunk(
   'changedoctors/doctorsChangeId',
   async ({ doctorId, departmentId, doctorInfo }, { dispatch }) => {
      try {
         const response = await axiosInstance.put(
            `/api/doctors/update?doctorId=${doctorId}&departmentId=${departmentId}`,
            doctorInfo
         )
         dispatch(spesialistThunk(doctorId))
         return response.data
      } catch (error) {
         return error
      }
   }
)

export const postFile = createAsyncThunk(
   'cards/postFile',
   async (data, { rejectWithValue }) => {
      try {
         const response = await fileAxiosInstanse.post('/api/files', {
            file: data,
         })
         return response.data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)

export const postNewDoctorsThunk = createAsyncThunk(
   'patientsResult/addResult',
   async (addDoctor, { rejectWithValue, dispatch }) => {
      try {
         const getFile = await dispatch(postFile(addDoctor.image)).unwrap()
         const { data } = await axiosInstance.post('/api/doctors/', {
            ...addDoctor,
            image: getFile.link,
         })
         dispatch(doctorsAllThunk(addDoctor.departmentId))
         return data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         notify(errorMessage, 'error')
         return rejectWithValue(error)
      }
   }
)
