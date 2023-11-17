import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'

const UserRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const logoutHandler = () => {
      navigate('/homepage')
      dispatch(logout())
   }
   return (
      <div>
         UserRoutes <button onClick={logoutHandler}>logout</button>
      </div>
   )
}

export default UserRoutes
