import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { theme } from './utils/constants/theme'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
)
