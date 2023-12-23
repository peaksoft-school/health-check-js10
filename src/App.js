import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
// import AppRoutes from './routes/AppRoutes'
import { PatientsAdmin } from './pages/admin/Patients'
import Header from './layout/admin/header/Header'
import { PatientsInternalPage } from './pages/admin/PatientsInternalPage'

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
         {/* <AppRoutes /> */}
         <Header />
         <PatientsAdmin />
         <PatientsInternalPage />
      </div>
   )
}
export default App
