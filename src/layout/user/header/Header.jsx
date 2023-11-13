import * as React from 'react'
import { IconButton, InputAdornment, styled } from '@mui/material'
import { useState } from 'react'
import Button from '../../../components/UI/Button'
import { Input } from '../../../components/UI/input/Input'
import {
   GroupIcon,
   HealthCheckIcon,
   InstagramIcon,
   LocationsIcon,
   PhoneIcon,
   ProfileIcon,
   ScheduleIcon,
   SearchIcon,
   TelegramIcon,
   WhatsappIcon,
} from '../../../assets'
import ReusableMenu from '../../../components/UI/Menu'
import SignIn from '../../login/SignIn'
import SignUp from '../../login/SignUp'
import ForgotPassword from '../../login/ForgotPassword'
import { localStorageKeys } from '../../../utils/constants/constants'

const Header = () => {
   const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
   const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
      useState(false)

   const navigateToForgotPassword = (e) => {
      e.preventDefault()
      setIsLoginModalOpen(false)
      setIsForgotPasswordModalOpen(true)
      localStorage.setItem(
         localStorageKeys.FORGOT_PASSWORD_MODAL_KEY,
         JSON.stringify(true)
      )
      localStorage.removeItem(localStorageKeys.SIGN_IN_MODAL_KEY)
      localStorage.removeItem(localStorageKeys.SIGN_UP_MODAL_KEY)
   }

   const navigateToSignIn = () => {
      setIsRegisterModalOpen(false)
      setIsForgotPasswordModalOpen(false)
      setIsLoginModalOpen(true)
      localStorage.setItem(
         localStorageKeys.SIGN_IN_MODAL_KEY,
         JSON.stringify(true)
      )
      localStorage.removeItem(localStorageKeys.FORGOT_PASSWORD_MODAL_KEY)
      localStorage.removeItem(localStorageKeys.SIGN_UP_MODAL_KEY)
   }

   const navigateToSignUp = () => {
      setIsLoginModalOpen(false)
      setIsRegisterModalOpen(true)
      localStorage.setItem(
         localStorageKeys.SIGN_UP_MODAL_KEY,
         JSON.stringify(true)
      )
      localStorage.removeItem(localStorageKeys.FORGOT_PASSWORD_MODAL_KEY)
      localStorage.removeItem(localStorageKeys.SIGN_IN_MODAL_KEY)
   }

   const menuItems = [
      {
         title: 'Войти',
         id: 1,
         onClick: navigateToSignIn,
      },
      {
         title: 'Регистрация',
         id: 2,
         onClick: navigateToSignUp,
      },
   ]

   const menuStyles = {
      '.MuiMenu-list': {
         'li:hover': {
            color: '#048741',
            background: 'none',
         },
      },
   }

   return (
      <>
         <SignIn
            open={isLoginModalOpen}
            setOpen={setIsLoginModalOpen}
            navigateToForgotPassword={navigateToForgotPassword}
            navigateToSignUp={navigateToSignUp}
         />
         <SignUp
            open={isRegisterModalOpen}
            setOpen={setIsRegisterModalOpen}
            navigateToSignIn={navigateToSignIn}
         />
         <ForgotPassword
            open={isForgotPasswordModalOpen}
            setOpen={setIsForgotPasswordModalOpen}
            navigateToSignIn={navigateToSignIn}
         />
         <HeaderStyle>
            <FirstNavStyle>
               <div className="containerInfo">
                  <div className="address">
                     <LocationsIcon />
                     <h3>106452, г. Бишкек, Гражданская 119</h3>
                  </div>
                  <div className="workingHours">
                     <ScheduleIcon />
                     <h3>
                        <span>пн-сб</span> 08:00 до 18:00
                     </h3>
                  </div>
               </div>
               <StyledInput
                  type="text"
                  placeholder="Поиск по сайту"
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton>
                              <SearchIcon />
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
               <ContainerIcons>
                  <a href="https://www.instagram.com">
                     <InstagramIcon />
                  </a>
                  <a href="https://t.me/">
                     <TelegramIcon />
                  </a>
                  <a href="https://www.whatsapp.com">
                     <WhatsappIcon />
                  </a>
               </ContainerIcons>
               <div className="contacts">
                  <div className="numbers">
                     <PhoneIcon />
                     <div>
                        <h3>+996(800) 000 000</h3>
                        <h3>+996(505) 000 000</h3>
                     </div>
                  </div>

                  <ReusableMenu
                     buttonIcon={<ProfileIcon />}
                     menuItems={menuItems}
                     sx={menuStyles}
                  />
               </div>
            </FirstNavStyle>
            <SecondNavStyle>
               <StyleCheck>
                  <GroupIcon />
                  <HealthCheckIcon />
               </StyleCheck>
               <NavList>
                  <h3>О клинике</h3>
                  <h3>Услуги</h3>
                  <h3>Врачи</h3>
                  <h3>Прайс</h3>
               </NavList>
               <ContainerButton>
                  <StyledButton variant="outlined">
                     ПОЛУЧИТЬ РЕЗУЛЬТАТЫ
                  </StyledButton>
                  <StyledButton variant="contained">ЗАПИСЬ ОНЛАЙН</StyledButton>
               </ContainerButton>
            </SecondNavStyle>
         </HeaderStyle>
      </>
   )
}

export default Header

const HeaderStyle = styled('header')(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   backgroundColor: '#fff',
   padding: '10px 6.5%',

   '.containerInfo': {
      textAlign: 'left',
      h3: {
         fontWeight: '500',
      },
   },
   '.address': {
      display: 'flex',
   },
   '.workingHours': {
      display: 'flex',
      span: {
         color: 'green',
      },
   },
   '#basic-button': {
      cursor: 'pointer',
   },
   '.contacts': {
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      h3: {
         fontWeight: '500',
      },
   },
   '.numbers': {
      display: 'flex',
      h3: {
         fontSize: '1.1rem',
      },
   },
}))

const FirstNavStyle = styled('nav')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 2px solid #d9d9d9;
   padding-bottom: 15px;
   & > input {
      width: 26rem;
      height: 40px;
      padding: 8px 18px;
      border-radius: 24px;
      background-color: #f3f1f1;
      border: none;
   }
`
const SecondNavStyle = styled('nav')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 10px;
`
const StyleCheck = styled('div')`
   display: flex;
   gap: 10px;
   align-items: center;
`

const NavList = styled('div')`
   display: flex;
   gap: 60px;
   h3 {
      font-weight: 500;
      font-size: 1.1rem;
      cursor: pointer;
   }
`
const ContainerButton = styled('div')`
   display: flex;
   gap: 30px;
`
const StyledButton = styled(Button)(() => ({
   borderRadius: '25px',
   '&:hover': { borderRadius: '25px' },
   '&:active': { borderRadius: '25px' },
}))

const StyledInput = styled(Input)(() => ({
   '.MuiOutlinedInput-root': {
      borderRadius: '25px',
      width: '23rem',
      height: '2.6rem',
      backgroundColor: '#F3F1F1',
   },
   '& input:-internal-autofill-selected': {
      height: '0.5rem',
   },
   '& .MuiOutlinedInput-input': {
      height: '0.5rem',
   },
   fieldset: {
      border: 'none',
   },
}))

const ContainerIcons = styled('div')`
   display: flex;
   gap: 10px;
`
