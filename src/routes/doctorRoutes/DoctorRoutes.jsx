import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'

const DoctorRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const logoutHandler = () => {
      navigate('/signin')
      dispatch(logout())
   }
   return (
      <div>
         DoctorRoutes <button onClick={logoutHandler}>logout</button>
      </div>
   )
}

export default DoctorRoutes
