import React from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import Index from './pages/Index'
import store from './modules/store'
import jaJP from 'antd/es/locale/ja_JP'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={jaJP}>
        <Index />
      </ConfigProvider>
    </Provider>
  )
}

export default App
