import React, { memo } from 'react'
import { css } from '@emotion/core'
import { useSelector } from 'react-redux'
import { AppState } from '~/modules/redux'
import { LoginForm } from '~/component/Auth/login-form'

interface Props {}

const Login: React.FC<Props> = memo(() => {
  const token = useSelector((state: AppState) => state.auth.token)

  return (
    <div>
      <div css={LoginStyle}>
        <h1>Login Page</h1>
        <div>{token ? <p>You are Logged in</p> : <LoginForm />}</div>
      </div>
    </div>
  )
})

const LoginStyle = css`
  min-height: 800px;
  margin-top: 30px;
`

export default Login
