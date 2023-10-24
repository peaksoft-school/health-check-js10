import { TextField } from '@mui/material'
import React from 'react'

export const Input = React.forwardRef(
   (
      {
         value,
         onChange,
         placeholder,
         invalid,
         error,
         height = '3rem',
         width = '26rem',
      },
      ref
   ) => {
      const InputStyled = {
         '.MuiOutlinedInput-root': {
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
               border: '1px solid #F91515',
            },
            '&.css-3ibld1-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
               {
                  border: '1px solid #F91515',
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
)
