import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RequireToken } from '~/modules/auth/Auth'
import Login from '~/pages/Login'
import Index from '~/pages/looking-backs/Index'

const Root: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireToken>
            <Index />
          </RequireToken>
        }
      />
    </Routes>
  )
}

export default Root
