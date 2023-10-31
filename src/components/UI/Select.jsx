import React from 'react'
import FormControl from '@mui/material/FormControl'
import MuiSelect from '@mui/material/Select'
import styled from '@emotion/styled'

export const Select = ({ options }) => {
   const [selectedOption, setSelectedOption] = React.useState([])

   const handleChangeMultiple = (event) => {
      setSelectedOption(event.target.value)
   }

   return (
      <div>
         <StyledFormControl>
            <MuiSelect
               multiple
               native
               value={selectedOption}
               onChange={handleChangeMultiple}
            >
               {options.map((option) => (
                  <option key={option} value={option}>
                     {option}
                  </option>
               ))}
            </MuiSelect>
         </StyledFormControl>
      </div>
   )
}

const StyledFormControl = styled(FormControl)(() => ({
   borderRadius: '0px 0px 15px 15px',
   width: '100%',
   '&.MuiFormControl-root': {
      '& select': {
         height: '20.1rem',
         padding: '0',
         '&.css-ffg8md-MuiNativeSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-ffg8md-MuiNativeSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-ffg8md-MuiNativeSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
            {
               borderRadius: '0px 0px 15px 15px',
               paddingRight: '0',
            },
      },
      '& option': {
         display: 'flex',
         alignItems: 'center',
         height: '2.8rem',
         paddingLeft: '1.8rem',
         fontSize: '1.2rem',
         '&:hover': {
            backgroundColor: '#DBF0E5',
         },
      },
      '& fieldset': {
         border: 'none',
         borderRadius: '0px 0px 15px 15px',
         outline: 'none',
      },
   },
}))
