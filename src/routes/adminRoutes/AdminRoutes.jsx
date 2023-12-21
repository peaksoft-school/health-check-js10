import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'
import Header from '../../layout/admin/header/Header'
import { PrivateRoutes } from '../PrivateRoutes'
import { routes } from '../../utils/constants/routes'
import { ApplicationsAdmin } from '../../pages/admin/ApplicationsAdmin'
import PatientComponent from '../../pages/admin/Patients'
import Specialists from '../../components/appointment/Specialists'

const AdminRoutes = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { isAuth } = useSelector((state) => state.authorization)

   const logoutHandler = () => {
      navigate('/homepage')
      dispatch(logout())
   }
   return (
      <>
         <Header logoutHandler={logoutHandler} />
         <Routes>
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
               path={routes.ADMIN.specialists}
               element={
                  <PrivateRoutes component={<Specialists />} isAuth={isAuth} />
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
         </Routes>
      </>
   )
}

export default AdminRoutes
