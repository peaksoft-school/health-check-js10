import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { applicationsThunk } from './store/applications/applicationsThunk'
import AppRoutes from './routes/AppRoutes'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(applicationsThunk()).then((result) => console.log(result))
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
      </div>
   )
}
export default App
