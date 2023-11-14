import { styled } from '@mui/material'
import Drawer from '../UI/Drawer'
import { CloseIcon } from '../../assets'
import ChooseServices from './ChooseServices'

const OnlineAppointment = ({ open, setOpen }) => {
   const handleClose = () => setOpen(false)

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
