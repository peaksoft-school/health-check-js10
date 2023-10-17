import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import Map from '../assets/images/map.png'
import MapLocation from '../assets/images/maplocation.png'
import LogoIcon from '../assets/icons/logo1.svg'

const Contacts = () => {
   return (
      <>
         <NavigatePathTitle>
            <p>
               <StyledNavLink to="/">Главная {' > '}</StyledNavLink>
               <span style={{ color: '#048741' }}>Контакты</span>
            </p>
         </NavigatePathTitle>
         <StyledContactInnerContainer>
            <h1>
               Наши <span style={{ color: '#048741' }}>контакты</span>
            </h1>
            <p>
               Комфорт и спокойствие пациента — это часть качественного лечения!
               <br />
               Предупредите администратора, что вы едете к нам на машине и мы
               предложим
               <br /> бесплатную подземную парковку при нашей клинике.
            </p>
            <p>
               Контактные номера:
               <br />
               <span style={{ color: '#048741' }}>
                  +996(800) 000 000 ; +996(505) 000 000
               </span>
            </p>
            <p>
               Наш адрес:
               <br />
               <span style={{ color: '#048741' }}>
                  Кыргызстан, г. Бишкек, Медерова 44
               </span>
            </p>
            <p>
               Режим работы клиники:
               <br />
               <span style={{ color: '#048741' }}>
                  Понедельник - суббота с 08:00 до 18:00.
               </span>
            </p>
            <p>
               Электронная почта :
               <br />
               <span style={{ color: '#048741' }}>healthchek.kg </span>
            </p>
         </StyledContactInnerContainer>
         <StyledMapImage>
            <img src={MapLocation} alt="" />
            <img
               style={{ right: '145px', top: '133px' }}
               src={LogoIcon}
               alt=""
            />
         </StyledMapImage>
      </>
   )
}

export default Contacts

const NavigatePathTitle = styled('div')(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   padding: '1.625rem 7.5rem',
   textAlign: 'start',
   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const StyledNavLink = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: '#959595',
}))

const StyledContactInnerContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   padding: '0 7.5rem 5rem',
   p: {
      color: '#4D4E51',
      fontSize: '1.2rem',
      textAlign: 'start',
   },
}))

const StyledMapImage = styled('div')(() => ({
   backgroundImage: `url(${Map})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no - repeat',
   backgroundPosition: 'center',
   height: '400px',
   width: '100%',
   img: {
      position: 'relative',
      top: '150px',
   },
}))
