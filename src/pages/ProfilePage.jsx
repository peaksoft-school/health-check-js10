import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
   const setActive = ({ isActive }) => `Enabled  ${isActive && 'active-link'}`
   const navigate = useNavigate()
   useEffect(() => {
      navigate('myInfo')
   }, [])
   return (
      <StyledContainer>
         <h2 className="cap">Профиль</h2>
         <div className="LinkTwo">
            <NavLink to="myInfo" className={setActive}>
               личные данные
            </NavLink>
            <NavLink to="passwordChange" className={setActive}>
               Сменить пароль
            </NavLink>
         </div>
         <Outlet />
      </StyledContainer>
   )
}

const StyledContainer = styled('div')({
   '.cap': {
      marginTop: '1.875rem',
      marginLeft: '7.7rem',
      color: '#222222',
      fontSize: '1.5rem',
   },
   '.LinkTwo': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1.875rem',
      marginTop: '1.3rem',
      marginLeft: '7.6rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      '.LinkTwo:onclick': {
         cursor: 'pointer',
      },
   },
   '.Enabled': {
      fontFamily: 'Manrope',
      color: '#959595',
      textDecoration: 'none',
   },
   '.Enabled.active-link': {
      color: '#048741',
      textDecoration: 'underline',
   },
})
