import './App.css'
import { Route, Routes } from 'react-router'
import SignUp from './layout/login/SignUp'
import SignIn from './layout/login/SignIn'
import ChangePassword from './layout/login/ChangePassword'
import ForgotPassword from './layout/login/ForgotPassword'

function App() {
   return (
      <Routes>
         <Route path="/login" element={<SignIn />} />
         <Route path="/register" element={<SignUp />} />
         <Route path="/changePassword" element={<ChangePassword />} />
         <Route path="/forgotPassword" element={<ForgotPassword />} />
         <Route path="/" element={<SignIn />} />
      </Routes>
   )
}
export default App
