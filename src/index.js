import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { theme } from './utils/constants/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>
)
