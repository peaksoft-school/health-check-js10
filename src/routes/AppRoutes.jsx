import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignIn from '../layout/login/SignIn'
import SignUp from '../layout/login/SignUp'
import { routes } from '../utils/constants/constants'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import AdminRoutes from './adminRoutes/AdminRoutes'
import UserRoutes from './userRoutes/UserRoutes'
import DoctorRoutes from './doctorRoutes/DoctorRoutes'
import ForgotPassword from '../layout/login/ForgotPassword'
import ChangePassword from '../layout/login/ChangePassword'

const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authorization)

   return (
      <Routes>
         <Route path="/" element={<SignIn />} />
         <Route path="/homepage" element={<h1>HomePage</h1>} />
         <Route path={routes.LOGIN.signIn} element={<SignIn />} />
         <Route path={routes.LOGIN.signUp} element={<SignUp />} />
         <Route
            path={routes.LOGIN.forgotPassword}
            element={<ForgotPassword />}
         />
         <Route
            path={`${routes.LOGIN.changePassword}/:id`}
            element={<ChangePassword />}
         />
         <Route
            path={routes.ADMIN.path}
            element={
               <PrivateRoutes component={<AdminRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={routes.USER.path}
            element={
               <PrivateRoutes component={<UserRoutes />} isAuth={isAuth} />
            }
         />
         <Route
            path={routes.DOCTOR.path}
            element={
               <PrivateRoutes component={<DoctorRoutes />} isAuth={isAuth} />
            }
         />
      </Routes>
   )
}

export default AppRoutes
