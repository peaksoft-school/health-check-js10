import * as React from 'react'
import { IconButton, InputAdornment, styled } from '@mui/material'
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

const Header = () => {
   const menuItems = [
      {
         title: 'Войти',
         id: 1,
      },
      {
         title: 'Регистрация',
         id: 2,
      },
   ]
   return (
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
   )
}

export default Header

const HeaderStyle = styled('header')`
   display: flex;
   flex-direction: column;
   width: 100%;
   background-color: #fff;
   padding: 10px 4%;
   .containerInfo {
      text-align: left;
      h3 {
         font-weight: 600;
      }
   }
   .address {
      display: flex;
   }
   .workingHours {
      display: flex;
      span {
         color: green;
      }
   }
   .custom-menu-item-text {
      font-family: 'Manrope';
   }
   #basic-button {
      cursor: pointer;
   }
   .contacts {
      display: flex;
      gap: 40px;
      align-items: center;
      h3 {
         font-weight: 600;
      }
   }
   .numbers {
      display: flex;
   }
`

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
      font-weight: 600;
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
   fieldset: {
      border: 'none',
   },
}))

const ContainerIcons = styled('div')`
   display: flex;
   gap: 10px;
`
