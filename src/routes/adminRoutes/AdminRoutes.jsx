import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'
import Header from '../../layout/admin/header/Header'

const AdminRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const logoutHandler = () => {
      navigate('/homepage')
      dispatch(logout())
   }
   return <Header logoutHandler={logoutHandler} />
}

export default AdminRoutes
