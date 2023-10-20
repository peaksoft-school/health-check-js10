import { useState } from 'react'
import { styled } from '@mui/material'
import Drawer from '../UI/Drawer'
import { CloseIcon } from '../../assets'

const OnlineAppointment = () => {
   const [open, setOpen] = useState(false)

   const handleClose = () => setOpen(false)
   const handleOpen = () => setOpen(true)

   return (
      <>
         <Drawer open={open} onClose={handleClose}>
            <Container>
               <Close onClick={handleClose} />
               <Header>
                  <Title>Онлайн запись</Title>
               </Header>
            </Container>
         </Drawer>
         <button type="button" onClick={handleOpen}>
            Open
         </button>
      </>
   )
}

export default OnlineAppointment

const Container = styled('div')(() => ({
   '&': {
      background: ' #F3F1F1',
   },
}))

const Header = styled('div')(() => ({
   background: '#fff',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const Close = styled(CloseIcon)(() => ({
   cursor: 'pointer',
   position: 'absolute',
   top: '16px',
   left: '16px',
}))

const Title = styled('h4')(() => ({
   margin: '17px auto',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '700',
   fontSize: '16px',
   color: '#048741',
}))
