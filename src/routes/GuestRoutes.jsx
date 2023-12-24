import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { logout } from '../store/auth/authSlice'
import Header from '../layout/user/header/Header'
import LandingPage from '../pages/user/LandingPage'
import OurAllServices from '../pages/user/OurAllServices'
import AboutHealth from '../components/AboutHealth'
import Prices from '../components/Prices'
import Contacts from '../components/Contacts'
import Profile from '../pages/user/Profile'
import Footer from '../layout/Footer'

const GuestRoutes = () => {
   const dispatch = useDispatch()

   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <>
         <Header logoutHandler={logoutHandler} variant="hr" />
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/homepage" element={<LandingPage />} />
            <Route path="/service" element={<OurAllServices />} />
            <Route path="/about-clinic" element={<AboutHealth />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/service" element={<OurAllServices />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route
               path="/profile/password-change"
               element={<PasswordChange />}
            /> */}
         </Routes>
         <Footer />
      </>
   )
}

export default GuestRoutes
