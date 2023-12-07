import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ChangePassword from '../layout/login/ChangePassword'
import { routes } from '../utils/constants/routes'
import AdminRoutes from './adminRoutes/AdminRoutes'
import DoctorRoutes from './doctorRoutes/DoctorRoutes'
import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import UserRoutes from './userRoutes/UserRoutes'
import { ApplicationsAdmin } from '../pages/admin/ApplicationsAdmin'
import LandingPage from '../pages/user/LandingPage'
import PatientComponent from '../pages/admin/Patients'
import { PatientsInternalPage } from '../pages/admin/PatientsInternalPage'
import OurAllServices from '../pages/user/OurAllServices'
import AboutHealth from '../components/AboutHealth'
import Prices from '../components/Prices'
import Contacts from '../components/Contacts'

const AppRoutes = () => {
   const { isAuth } = useSelector((state) => state.authorization)

   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/homepage" element={<LandingPage />} />
         <Route path="/service" element={<OurAllServices />} />
         <Route path="/about-clinic" element={<AboutHealth />} />
         <Route path="/prices" element={<Prices />} />
         <Route path="/contacts" element={<Contacts />} />
         <Route path="/service" element={<OurAllServices />} />
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
         <Route
            path={routes.ADMIN.patients}
            element={
               <PrivateRoutes
                  component={<PatientComponent />}
                  isAuth={isAuth}
               />
            }
         />
         <Route
            path={routes.ADMIN.patientsId}
            element={
               <PrivateRoutes
                  component={<PatientsInternalPage />}
                  isAuth={isAuth}
               />
            }
         />
      </Routes>
   )
}

export default AppRoutes
