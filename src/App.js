import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
import PatientComponent from './components/patients/Patients'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      console.log('dawdaw')
      const USER_DATA = localStorage.getItem(USER_KEY)
      const parserData = JSON.parse(USER_DATA)
      if (parserData?.userToken) {
         dispatch(login({ data: parserData, navigate }))
      }
   }, [])
   return (
      <div className="App">
         <AppRoutes />
         <PatientComponent />
      </div>
   )
}
export default App
