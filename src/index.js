import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import App from './App'
import { theme } from './utils/constants/theme'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <SnackbarProvider>
               <ThemeProvider theme={theme}>
                  <App />
               </ThemeProvider>
            </SnackbarProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
)
