import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ChangePassword from '../layout/login/ChangePassword'
import { routes } from '../utils/constants/routes'
import AdminRoutes from './adminRoutes/AdminRoutes'
import DoctorRoutes from './doctorRoutes/DoctorRoutes'
import UserRoutes from './userRoutes/UserRoutes'
import { ApplicationsAdmin } from '../pages/admin/ApplicationsAdmin'
import LandingPage from '../pages/user/LandingPage'
import Patients from '../pages/admin/Patients'
import { Parents } from '../components/UI/TableParents'
import PatientTable from '../components/UI/PatientTable'
import { PatientsInternalPage } from '../pages/admin/PatientsInternalPage'
import OurAllServices from '../pages/user/OurAllServices'
import AboutHealth from '../components/AboutHealth'
import Prices from '../components/Prices'
import Contacts from '../components/Contacts'
import Profile from '../pages/user/Profile'
import { PasswordChange } from '../pages/user/PasswordChange'
import { PrivateRoutes } from './PrivateRoutes'
import { AdminAppointmentsPage } from '../pages/admin/AdminAppointmetsPage'
import SchedulePage from '../pages/admin/schedule/SchedulePage'

const AppRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authorization)

   return (
      <>
         {role === 'ADMIN' ? <AdminRoutes /> : null}
         {/* <Route path="/" element={<LandingPage />} />
         <Route path="/homepage" element={<LandingPage />} />
         <Route path="/service" element={<OurAllServices />} />
         <Route path="/about-clinic" element={<AboutHealth />} />
         <Route path="/prices" element={<Prices />} />
         <Route path="/contacts" element={<Contacts />} />
         <Route path="/service" element={<OurAllServices />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/profile/password-change" element={<PasswordChange />} /> */}
         {/* <Route
            path={routes.ADMIN.applications}
            element={
               <PrivateRoutese
                  component={<ApplicationsAdmin />}
                  isAuth={isAuth}
               />
            }
         /> */}
         {/* <Route
            path={`${routes.LOGIN.changePassword}/:uniqueId`}
            element={<ChangePassword />}
         /> */}
         {/* <Route
            path={routes.ADMIN.path}
            element={
               <PrivateRoutes component={<AdminRoutes />} isAuth={isAuth} />
            }
         /> */}
         {/* <Route
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
         /> */}
         {/* <Route
            path={routes.ADMIN.patients}
            element={<PrivateRoutes component={<Patients />} isAuth={isAuth} />}
         />

         <Route
            path={routes.ADMIN.onlineRegistration}
            element={
               <PrivateRoutes
                  component={<AdminAppointmentsPage />}
                  isAuth={isAuth}
               />
            }
         /> */}

         {/* <Route
            path="online-registration/schedule"
            element={
               <PrivateRoutes component={<SchedulePage />} isAuth={isAuth} />
            }
         /> */}

         {/* <Route
            path={routes.USER.appointments}
            element={<PrivateRoutes component={<Parents />} isAuth={isAuth} />}
         />

         <Route
            path={routes.USER.appointment}
            element={
               <PrivateRoutes component={<PatientTable />} isAuth={isAuth} />
            }
         /> */}
         {/* <Route
            path={routes.ADMIN.patientsId}
            element={
               <PrivateRoutes
                  component={<PatientsInternalPage />}
                  isAuth={isAuth}
               />
            }
         /> */}
      </>
   )
}

export default AppRoutes
