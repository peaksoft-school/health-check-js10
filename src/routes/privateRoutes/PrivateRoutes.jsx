import React from 'react'
import { Navigate } from 'react-router'
import { routes } from '../../utils/constants/constants'

export const PrivateRoutes = ({ component, isAuth }) => {
   if (isAuth) {
      return component
   }
   return <Navigate to={routes.LOGIN} replace />
}
