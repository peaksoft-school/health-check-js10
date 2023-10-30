import { styled } from '@mui/material'
import Button from '../../../components/UI/Button'
import {
   GroupIcon,
   InstagramIcon,
   LocationsIcon,
   MedCheckIcon,
   PhoneIcon,
   ProfileIcon,
   ScheduleIcon,
   TelegramIcon,
   WhatsappIcon,
} from '../../../assets'

const Header = () => {
   return (
      <HeaderStyle>
         <FirstNavStyle>
            <div style={{ textAlign: 'left' }}>
               <div style={{ display: 'flex' }}>
                  <img src={LocationsIcon} alt="location" />
                  <h4>106452, г. Бишкек, Гражданская 119</h4>
               </div>
               <div style={{ display: 'flex' }}>
                  <img src={ScheduleIcon} alt="schedule" />
                  <h4>
                     <span style={{ color: 'green' }}>пн-сб</span> 08:00 до
                     18:00
                  </h4>
               </div>
            </div>
            <input type="text" placeholder="Поиск по сайту" />
            <ContainerIcons>
               <img src={InstagramIcon} alt="instagram" />
               <img src={TelegramIcon} alt="telegram" />
               <img src={WhatsappIcon} alt="whatsapp" />
            </ContainerIcons>
            <div style={{ display: 'flex', gap: '40px' }}>
               <div>
                  <div style={{ display: 'flex' }}>
                     <img src={PhoneIcon} alt="phone" />
                     <h4>+996(800) 000 000</h4>
                  </div>

                  <h4>+996(505) 000 000</h4>
               </div>

               <img src={ProfileIcon} alt="profile" />
            </div>
         </FirstNavStyle>
         <SecondNavStyle>
            <IconsMedCheckStyle>
               <img src={GroupIcon} alt="group" />
               <img src={MedCheckIcon} alt="medcheck" />
            </IconsMedCheckStyle>
            <NavList>
               <h4>О клинике</h4>
               <h4>Услуги</h4>
               <h4>Врачи</h4>
               <h4>Прайс</h4>
            </NavList>
            <ContainerButton>
               <StyledButton variant="outlined">
                  получить результаты
               </StyledButton>
               <StyledButton variant="contained">Запись онлайн</StyledButton>
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
   padding: 10px 7%;
`
const FirstNavStyle = styled('nav')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 2px solid #616165;
   padding-bottom: 20px;
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
   padding-top: 15px;
`
const NavList = styled('div')`
   display: flex;
   gap: 70px;
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

const IconsMedCheckStyle = styled('div')`
   display: flex;
   text-align: center;
   gap: 15px;
`
const ContainerIcons = styled('div')`
   display: flex;
   gap: 10px;
`
