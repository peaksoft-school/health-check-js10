import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
import { AdminAppointmentsPage } from './pages/admin/AdminAppointmetsPage'
import AppRoutes from './routes/AppRoutes'
import Header from './layout/admin/header/Header'

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
      <div className="App">
         <Header />
         <AdminAppointmentsPage />
         {/* <AppRoutes /> */}
      </div>
   )
}
export default App
