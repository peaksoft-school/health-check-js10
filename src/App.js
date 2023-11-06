import React, { Profiler } from 'react'
import './App.css'
import { PasswordChange } from './pages/PasswordChange'
// import { Route, Routes } from 'react-router-dom'
// import { PasswordChange } from './pages/PasswordChange'
// import Profile from './pages/Profile'

function App() {
   return (
      <div className="App">
         <PasswordChange />
         <Profiler />
         {/* <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/PasswordChange" element={<PasswordChange />} />
         </Routes> */}
      </div>
   )
}
export default App
