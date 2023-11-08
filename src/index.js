import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { theme } from './utils/constants/theme'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
)
