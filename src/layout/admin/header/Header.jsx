import React from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { AllIcon, GroupIcon, HealthCheckIcon } from '../../../assets'
import ReusableMenu from '../../../components/UI/Menu'
import { logout } from '../../../store/auth/authSlice'

const Header = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const logoutHandler = () => {
      navigate('/signin')
      dispatch(logout())
   }
   const menuItems = [
      {
         title: 'Администратор',
         id: 1,
      },
      {
         title: 'Выйти',
         onclick: () => logoutHandler,
         id: 2,
      },
   ]

   return (
      <StyleHeader>
         <div className="health-check">
            <GroupIcon />
            <HealthCheckIcon />
         </div>
         <nav>
            <ul>
               <li>
                  <StyledNavLink
                     to="/online-registration"
                     activeClassName="active"
                  >
                     Онлайн-запись
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="/applications" activeClassName="active">
                     Заявки
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="/specialists" activeClassName="active">
                     Специалисты
                  </StyledNavLink>
               </li>
               <li>
                  <StyledNavLink to="/patients" activeClassName="active">
                     Пациенты
                  </StyledNavLink>
               </li>
            </ul>
         </nav>

         <ReusableMenu
            buttonIcon={
               <>
                  <span>Администратор</span>
                  <AllIcon />
               </>
            }
            menuItems={menuItems}
         />
      </StyleHeader>
   )
}

export default Header

const StyleHeader = styled('header')`
   width: 100%;
   height: 11vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 8px 3%;
   .health-check {
      display: flex;
      align-items: center;
      gap: 10px;
   }
   ul {
      display: flex;
      gap: 40px;
   }
   li {
      list-style: none;
   }
   span {
      color: #222;
      margin-right: 10px;
      font-size: 12px;
      font-weight: 500;
      font-family: 'Manrope';
   }
`

const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #707070;
   border-bottom: 3px solid transparent;
   padding-bottom: 3.6vh;
   &:active {
      color: #048741;
   }
   &.active {
      border-color: #048741;
      color: #222;
   }
`
