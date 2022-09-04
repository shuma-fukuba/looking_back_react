import React, { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { actions } from '~/modules/auth/redux'
import { User } from '~/entities/user'

interface Props {}

export const LoginForm: React.FC<Props> = memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = useCallback(async () => {
    if (username === '' || password === '') return
    // TODO anyActionをなんとかする
    // dispatch(actions.login({ username, password }))
    dispatch(actions.updateToken('dfafiuaesdfhjaisdh'))
    navigate('/')
  }, [username, password, dispatch])

  const onFinish = useCallback((values: any) => {
    console.log('Success:', values)
  }, [])

  const onFinishFailed = useCallback((errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }, [])

  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(() => e.target.value)
  }

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(() => e.target.value)
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input onChange={handleSetUsername} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={handleSetPassword} />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
})
