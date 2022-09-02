import React, { Dispatch, memo, ReactElement, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { AppState } from '~/modules/redux'

interface Props {
  children: ReactElement<any, any>
}

export const RequireToken: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch()
  const token = useSelector((state: AppState) => state.auth.token)
  const location = useLocation()

  if (!token) return <Navigate to="/login" state={{ from: location }} />
  return children
}
