import styled from '@emotion/styled'
import React from 'react'

const InputForm = ({ label, type, value, onChange, ...rest }) => {
   return (
      <div>
         <StyledLabel>{label}</StyledLabel>
         <StyledInput type={type} value={value} onChange={onChange} {...rest} />
      </div>
   )
}

export default InputForm

const StyledInput = styled('input')(() => ({
   width: '100%',
   padding: '10px 18px',
   border: '1px solid #D9D9D9',
   borderRadius: '5px',
   outline: 'none',
   '&[type="number"]': {
      '-moz-appearance': 'textfield',
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
         '-webkit-appearance': 'none',
         margin: 0,
      },
   },
   '&:hover': {
      border: '1px solid #959595',
   },
   '&:focus': {
      border: '1px solid #048741',
   },
   '&:invalid': {
      border: '1px solid #F91515',
   },
}))

const StyledLabel = styled('p')(() => ({
   margin: '12px 0 6px',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '12px',
   color: '#4D4E51',
}))
