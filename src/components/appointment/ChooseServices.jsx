import React from 'react'
import { styled } from '@mui/material'
import { ChooseServiceIcon } from '../../assets'
import { MED_SERVICE } from '../../utils/services/med_service'
import { SelectUI } from '../UI/Select'

const ChooseServices = () => {
   return (
      <Wrapper>
         <StyledSelect
            icon={<ChooseServiceIcon />}
            placeholder="Выбрать услуги"
            options={MED_SERVICE}
            sx={{
               boxShadow: 'none',
               '.MuiOutlinedInput-notchedOutline': { border: 0 },
               '.css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper': {
                  top: 135,
               },
            }}
         />
      </Wrapper>
   )
}

export default ChooseServices

const Wrapper = styled('div')(() => ({
   padding: '0 6px',
}))

const StyledSelect = styled(SelectUI)(() => ({
   padding: '10px 0',
   paddingLeft: '50px',
   margin: '6px 0',
   border: '1px solid #fff',
   outline: '1px solid #fff',
   borderRadius: '16px',
   background: '#ffffff',
   color: '#222222',
   fontSize: '16px',
   fontWeight: '500',
   'select:focus': {
      outline: 'none',
   },
   '&:hover': {
      '&& fieldset': {
         border: '1px solid #fff',
         outline: 'none',
      },
   },
   '&:active': {
      '&& fieldset': {
         border: '1px solid #fff',
         outline: 'none',
      },
   },
   '&:disabled': {
      '&& fieldset': {
         border: '1px solid #fff',
         outline: 'none',
      },
   },
}))
