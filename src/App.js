import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
import AppRoutes from './routes/AppRoutes'
import { Specialists } from './pages/admin/Specialists'
import DoctorDetails from './pages/admin/DoctorDetails'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      const USER_DATA = localStorage.getItem(USER_KEY)
      const parserData = JSON.parse(USER_DATA)
      if (parserData?.token) {
         dispatch(login({ data: parserData, navigate }))
      }
   }, [])

   return (
      <div>
         <Routes>
            <Route path="/specialists" element={<Specialists />} />
            <Route
               path="/specialists/doctor-details/:doctorId"
               element={<DoctorDetails />}
            />
            <Route
               path="/specialists/doctor-add"
               element={<DoctorDetails variant="emtpy" />}
            />
         </Routes>
         <div className="App">
            <AppRoutes />
         </div>
      </div>
   )
}
export default App
