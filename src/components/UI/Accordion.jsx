import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { ReactComponent as PointerIcon } from '../../assets/icons/pointer-icon.svg'

export default function CustomizedAccordions({ title, children }) {
   const [expanded, setExpanded] = React.useState(false)

   const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false)
   }

   return (
      <Accordion
         expanded={expanded === 'panel1'}
         onChange={handleChange('panel1')}
      >
         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{title}</Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>{children}</Typography>
         </AccordionDetails>
      </Accordion>
   )
}

const Accordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
   '&:not(:last-child)': {
      borderBottom: 0,
   },
   '&:before': {
      display: 'none',
   },
}))

const AccordionSummary = styled((props) => (
   <MuiAccordionSummary
      expandIcon={<PointerIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
   />
))(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#DBF0E5',
   borderRadius: '8px',
   boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
   fontWeight: '500',
   borderLeft: '10px solid #048741',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
   },
   transition: 'background-color 0.3s',

   '&.Mui-expanded': {
      backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#048741 ',
      color: theme.palette.mode === 'dark' ? '#000003' : '#FFF',
   },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
}))
