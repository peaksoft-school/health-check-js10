import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { theme } from './utils/constants/theme'
import { store } from './store'
import App from './App'
import { injectStore } from './config/axiosInstance'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={injectStore(store)}>
         <BrowserRouter>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
)
