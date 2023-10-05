import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material'

export const SelectUi = () => {
   const [selectedNames, setSelectedNames] = React.useState([])

   const handleChange = (event) => {
      setSelectedNames(event.target.value)
   }

   return (
      <div>
         <FormControl>
            <SelectStyle value={selectedNames} onChange={handleChange}>
               <option>hg</option>
               <option>fsdf</option>
               <option>fsdf</option>
               <option>fsdf</option>
            </SelectStyle>
         </FormControl>
      </div>
   )
}

const SelectStyle = styled(Select)(() => ({
   marginTop: '50px',
   borderBottomLeftRadius: '10px',
   borderBottomRightRadius: '10px',
   borderTop: '0px',
   width: '368px',
   cursor: 'pointer',
}))
