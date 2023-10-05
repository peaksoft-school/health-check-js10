import { TextField } from '@mui/material'
import React from 'react'

export const InputUi = ({
   value,
   ref,
   onChange,
   placeholder,
   invalid,
   error,
   size,
}) => {
   const InputStyled = {
      '& .MuiOutlinedInput-root': {
         width: '414px',
         height: size === 'small' ? '38px' : '45px',
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
         ref={ref}
         onChange={onChange}
         placeholder={placeholder}
         error={Boolean(error)}
         invalid={invalid}
      />
   )
}
