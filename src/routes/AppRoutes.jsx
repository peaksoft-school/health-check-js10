import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ChangePassword from '../layout/login/ChangePassword'
import { routes } from '../utils/constants/constants'
import AdminRoutes from './adminRoutes/AdminRoutes'
import DoctorRoutes from './doctorRoutes/DoctorRoutes'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import UserRoutes from './userRoutes/UserRoutes'
import { ApplicationsAdmin } from '../pages/admin/ApplicationsAdmin'
import LandingPage from '../pages/user/LandingPage'

const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authorization)

   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/homepage" element={<LandingPage />} />
         <Route
            path={routes.ADMIN.applications}
            element={
               <PrivateRoutes
                  component={<ApplicationsAdmin />}
                  isAuth={isAuth}
               />
            }
         />
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
