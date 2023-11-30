import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { applicationsThunk } from './store/applications/applicationsThunk'

import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
import AppRoutes from './routes/AppRoutes'
import { OnlineAppointmetsPage } from './pages/admin/OnlineAppointmentsPage'

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

   useEffect(() => {
      dispatch(applicationsThunk())
   }, [dispatch])

   return (
      <div className="App">
         <OnlineAppointmetsPage />
      </div>
   )
}
export default App
