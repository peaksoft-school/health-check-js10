import React from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../../utils/constants/constants'

export const PrivateRoutes = ({ component, isAuth }) => {
   if (isAuth) {
      return component
   }
   return <Navigate to={routes.LOGIN} replace />
}
