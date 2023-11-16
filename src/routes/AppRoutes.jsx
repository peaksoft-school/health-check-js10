import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routes } from '../utils/constants/constants'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import AdminRoutes from './adminRoutes/AdminRoutes'
import UserRoutes from './userRoutes/UserRoutes'
import DoctorRoutes from './doctorRoutes/DoctorRoutes'
import ChangePassword from '../layout/login/ChangePassword'
import LandingPage from '../pages/user/LandingPage'

const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authorization)

   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/homepage" element={<LandingPage />} />
         <Route
            path={`${routes.LOGIN.changePassword}/:uniqueId`}
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
