import React from 'react'
import styled from '@emotion/styled'
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom'
import Logo from '../assets/icons/group.svg'
import LogoName from '../assets/icons/medcheck.svg'
import PhoneIcon from '../assets/icons/phone-outlined1.svg'
import Email from '../assets/icons/email-outlined.svg'
import TimeIcon from '../assets/icons/time-outlined.svg'
import LocationIcon from '../assets/icons/location-outlined.svg'
import InstagramIcon from '../assets/icons/instagram-icon.svg'
import TelegramIcon from '../assets/icons/telegram-icon.svg'
import WhatsappIcon from '../assets/icons/whatsapp-icon.svg'

const Footer = () => {
   return (
      <FooterContainer>
         <InfoContainer>
            <InfoBlock>
               <LogoContainer>
                  <NavLink to="/homepage">
                     <img src={Logo} alt="medcheck" />
                  </NavLink>
                  <NavLink to="/homepage">
                     <img src={LogoName} alt="medcheck" />
                  </NavLink>
               </LogoContainer>
               <span>Медицинская клиника «MedCheck»</span>
               <p>
                  Международная Медицинская клиника <br /> «MedCheck»— это
                  клиника, в которой применяются <br />
                  новейшие диагностические и лечебные технологии и<br /> ведут
                  прием лучшие специалисты.
               </p>
            </InfoBlock>
            <InfoBlock>
               <span>Контактная информация</span>
               <NavLink to="/location">
                  <img src={LocationIcon} alt="location" />
                  <p>106452, г. Бишкек, Гражданская 119</p>
               </NavLink>
               <NavLink to="/time">
                  <img src={TimeIcon} alt="time" />
                  <p>пн-сб 08:00 до 18:00</p>
               </NavLink>
               <NavLink to="/call">
                  <img src={PhoneIcon} alt="phone" />
                  <p>
                     +996(800) 000 000 <br /> +996(505) 000 000
                  </p>
               </NavLink>
               <NavLink to="/message">
                  <img src={Email} alt="email" />
                  <p>medchek.kg</p>
               </NavLink>
            </InfoBlock>
            <InfoBlock>
               <span>Мы в социальных сетях:</span>
               <SocialLinks>
                  <NavLink to="/instagram">
                     <img src={InstagramIcon} alt="instagram" />
                  </NavLink>
                  <NavLink to="/telegram">
                     <img src={TelegramIcon} alt="telegram" />
                  </NavLink>
                  <NavLink to="/whatsapp">
                     <img src={WhatsappIcon} alt="whatsapp" />
                  </NavLink>
               </SocialLinks>
            </InfoBlock>
         </InfoContainer>
         <Navigations>
            <NavLink to="/aboutClinic">О клинике</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/doctors">Врачи</NavLink>
            <NavLink to="/price">Прайс</NavLink>
            <NavLink to="/reviews">Отзывы</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
         </Navigations>
         <div className="line" />
         <p>© Peaksoft House 2023 | MedCheck | Все права защищены</p>
      </FooterContainer>
   )
}

export default Footer

const FooterContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #212529;
   padding: 4rem 7.5rem 1.2rem;
   .line {
      width: 100%;
      height: 0.5px;
      background-color: #ccc;
      margin-bottom: 1.2rem;
   }
   p {
      color: #959595;
   }
`
const InfoContainer = styled('div')`
   display: flex;
   align-items: flex-start;
   gap: 7rem;
   font-family: 'Manrope', sans-serif;
   color: #ccc;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   flex-wrap: wrap;
`
const LogoContainer = styled('div')`
   display: flex;
   align-items: center;
   padding-bottom: 1.5rem;
`

const InfoBlock = styled('div')`
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   align-items: flex-start;
   & > span {
      padding-bottom: 1.2rem;
      font-weight: 500;
      color: #fff;
   }
   a {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      color: inherit;
   }
   a > img {
      padding-right: 0.5rem;
   }
   p {
      color: #ccc;
      text-align: left;
   }
`
const SocialLinks = styled('div')`
   display: flex;
   juflex-direction: row;
   align-items: flex-start;
`

const Navigations = styled('div')`
   display: flex;
   juflex-direction: row;
   flex-wrap: wrap;
   gap: 1.5rem;
   padding: 3rem;
   a {
      text-decoration: none;
      color: #ccc;
   }
`
