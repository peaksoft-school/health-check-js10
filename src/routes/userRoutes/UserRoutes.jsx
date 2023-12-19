import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
import LandingPage from '../../pages/user/LandingPage'

const UserRoutes = () => {
   const dispatch = useDispatch()

   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <div>
         <LandingPage logoutHandler={logoutHandler} />
      </div>
   )
}

export default UserRoutes
