import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import Map from './Map'

const Contacts = () => {
   return (
      <>
         <NavigatePathTitle>
            <p>
               <StyledNavLink to="/">Главная {' > '}</StyledNavLink>
               <StyledSpan>Контакты</StyledSpan>
            </p>
         </NavigatePathTitle>
         <StyledContactInnerContainer>
            <h1>
               Наши
               <StyledSpan>контакты</StyledSpan>
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
               <StyledSpan>+996(800) 000 000 ; +996(505) 000 000</StyledSpan>
            </p>
            <p>
               Наш адрес:
               <br />
               <StyledSpan>Кыргызстан, г. Бишкек, Медерова 44</StyledSpan>
            </p>
            <p>
               Режим работы клиники:
               <br />
               <StyledSpan>Понедельник - суббота с 08:00 до 18:00.</StyledSpan>
            </p>
            <p>
               Электронная почта :
               <br />
               <StyledSpan>healthchek.kg </StyledSpan>
            </p>
         </StyledContactInnerContainer>
         <div>
            <Map />
         </div>
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

const StyledSpan = styled('span')(() => ({
   color: '#048741',
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
