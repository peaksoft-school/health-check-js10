import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PasswordChange } from './pages/PasswordChange'
import Profile from './pages/Profile'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/PasswordChange" element={<PasswordChange />} />
         </Routes>
      </div>
   )
}
export default App
