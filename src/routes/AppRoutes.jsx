import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ChangePassword from '../layout/login/ChangePassword'
import ForgotPassword from '../layout/login/ForgotPassword'
import SignIn from '../layout/login/SignIn'
import SignUp from '../layout/login/SignUp'
import { routes } from '../utils/constants/constants'
import AdminRoutes from './adminRoutes/AdminRoutes'
import DoctorRoutes from './doctorRoutes/DoctorRoutes'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import UserRoutes from './userRoutes/UserRoutes'

const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authorization)

   return (
      <Routes>
         <Route path="/" element={<h1>HomePage</h1>} />
         <Route path="/homepage" element={<h1>HomePage</h1>} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/forgotPassword" element={<ForgotPassword />} />
         <Route path="/changePassword" element={<ChangePassword />} />
         <Route
            path={routes.ADMIN.index}
            element={
               <PrivateRoutes component={<AdminRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={routes.USER.index}
            element={
               <PrivateRoutes component={<UserRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={routes.DOCTOR.index}
            element={
               <PrivateRoutes component={<DoctorRoutes />} isAuth={isAuth} />
            }
         />
      </Routes>
   )
}

export default AppRoutes
