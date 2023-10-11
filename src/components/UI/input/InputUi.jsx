import { TextField } from '@mui/material'
import React from 'react'

export const Input = ({
   value,
   ref,
   onChange,
   placeholder,
   invalid,
   error,
   height = '45px',
   width = '414px',
}) => {
   const InputStyled = {
      '& .MuiOutlinedInput-root': {
         width: { width },
         height: { height },
         borderRadius: '8px',
         '& fieldset': {
            borderColor: '#D9D9D9',
         },
         '&:hover fieldset': {
            borderColor: '#959595',
         },
         '&:active fieldset': {
            borderColor: '#rgba(4, 135, 65, 0.80)',
         },
         '&:invalid fieldset': {
            borderColor: '#F91515',
         },
         '&.Mui-focused fieldset': {
            borderColor: 'rgba(4, 135, 65, 0.80)',
         },
      },
   }
   return (
      <TextField
         sx={InputStyled}
         value={value}
         inputRef={ref}
         onChange={onChange}
         placeholder={placeholder}
         error={Boolean(error)}
         invalid={invalid}
      />
   )
}
