import { styled } from '@mui/material'
import { useEffect } from 'react'
import Drawer from '../UI/Drawer'
import ChooseServices from './ChooseServices'
import { localStorageKeys } from '../../utils/constants/constants'
import { CloseIcon } from '../../assets'

const OnlineAppointment = ({ open, setOpen }) => {
   const handleClose = () => {
      setOpen(false)
      localStorage.removeItem(localStorageKeys.DRAWER_MODAL_KEY)
   }

   useEffect(() => {
      const parsedData = JSON.parse(
         localStorage.getItem(localStorageKeys.DRAWER_MODAL_KEY)
      )
      setOpen(parsedData)
   }, [])

   return (
      <Drawer open={open} onClose={handleClose}>
         <Container>
            <Close onClick={handleClose} />
            <Header>
               <Title>Онлайн запись</Title>
            </Header>
            <ChooseServices />
         </Container>
      </Drawer>
   )
}

export default OnlineAppointment

const Container = styled('div')(() => ({
   backgroundColor: ' #F3F1F1',
   height: '100vh',
   '.css-1i1pci7-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover':
      {
         height: 'fit-content',
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
