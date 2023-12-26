import React from 'react'
import { useSelector } from 'react-redux'
import AdminRoutes from './adminRoutes/AdminRoutes'
import UserRoutes from './userRoutes/UserRoutes'

import { ApplicationsAdmin } from '../pages/admin/ApplicationsAdmin'
import LandingPage from '../pages/user/LandingPage'
// import Patients from '../pages/admin/Patients'
import { Parents } from '../components/UI/TableParents'
import PatientTable from '../components/UI/PatientTable'
import { PatientsInternalPage } from '../pages/admin/PatientsInternalPage'
import Doctors from '../pages/user/Doctors'
import DoctorInnerPage from '../pages/user/DoctorInnerPage'
=======
import GuestRoutes from './GuestRoutes'
import { USER_KEY } from '../utils/constants/constants'

const AppRoutes = () => {
   const { isAuth, role } = useSelector((state) => state.authorization)

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
         {/* <Route
            path={routes.ADMIN.patients}
            element={<PrivateRoutes component={<Patients />} isAuth={isAuth} />}
         /> */}

         <Route
            path={routes.USER.appointments}
            element={<PrivateRoutes component={<Parents />} isAuth={isAuth} />}
         />

         <Route
            path={routes.USER.appointment}
            element={
               <PrivateRoutes component={<PatientTable />} isAuth={isAuth} />
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
         <Route
            path={routes.USER.doctors}
            element={<PrivateRoutes component={<Doctors />} isAuth={isAuth} />}
         />
         <Route
            path={routes.USER.doctor}
            element={
               <PrivateRoutes component={<DoctorInnerPage />} isAuth={isAuth} />
            }
         />
      </Routes>
   const storedData = JSON.parse(localStorage.getItem(USER_KEY)) || {}
   const restoredRole = storedData.role

   return (
      <>
         {isAuth && (role || restoredRole) === 'ADMIN' ? <AdminRoutes /> : null}
         {isAuth && (role || restoredRole) === 'USER' ? <UserRoutes /> : null}
         {!isAuth ? <GuestRoutes /> : null}
      </>
   )
}

export default AppRoutes
