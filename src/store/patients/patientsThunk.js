import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { fileAxiosInstanse } from '../../config/fileAxiosInstanse'

export const getPatientsResultThunk = createAsyncThunk(
   'patientsResult/getResults',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/results/forAdmin?userId=${userId}`
         )

         console.log(response)

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getPatientsAsyncThunk = createAsyncThunk(
   'patientsData/patientsById',
   async (patientId, { dispatch }) => {
      try {
         const response = await axiosInstance.get(`/api/patients/${patientId}`)
         dispatch(getPatientsResultThunk(patientId))
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
         return rejectWithValue(error.message)
      }
   }
)

export const postPatientsResultThunk = createAsyncThunk(
   'patientsResult/addResult',
   async (result, { rejectWithValue, dispatch }) => {
      try {
         const getFile = await dispatch(postFile(result.pdgFileCheque)).unwrap()
         const { data } = await axiosInstance.post('/api/results/add-result', {
            ...result,
            pdgFileCheque: getFile.link,
         })
         console.log(data)
         dispatch(getPatientsResultThunk(result.patientId))
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
