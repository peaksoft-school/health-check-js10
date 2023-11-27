import { createAsyncThunk } from '@reduxjs/toolkit'
import { fileAxiosInstanse } from '../../config/fileAxiosInstanse'

export const uploadFile = createAsyncThunk('s3/uploadFile', async (file) => {
   try {
      const response = await fileAxiosInstanse.post('/api/files', file)
   } catch (error) {
      console.log(error)
   }
})
