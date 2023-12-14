import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { pdfjs } from 'react-pdf'
import { applicationsThunk } from './store/applications/applicationsThunk'

import GetResult from './components/GetResult'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
// eslint-disable-next-line import/no-unresolved
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

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
         <GetResult />
      </div>
   )
}
export default App
