import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'

const AdminRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const logoutHandler = () => {
      navigate('/homepage')
      dispatch(logout())
   }
   return (
      <div>
         AdminRoutes <button onClick={logoutHandler}>logout</button>
      </div>
   )
}

export default AdminRoutes
