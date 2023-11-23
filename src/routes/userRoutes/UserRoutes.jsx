import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import MyInfo from '../../pages/MyInfo'
import { ProfilePage } from '../../pages/ProfilePage'
import { logout } from '../../store/auth/authSlice'
import { PasswordChange } from '../../pages/PasswordChange'

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
         <Routes>
            <Route path="/" index element={<Navigate to="profile" />} />
            <Route path="/profile/*" element={<ProfilePage />}>
               <Route path="myInfo" element={<MyInfo />} />
               <Route path="passwordChange" element={<PasswordChange />} />
            </Route>
         </Routes>
      </div>
   )
}

export default UserRoutes
