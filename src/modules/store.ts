import {
  applyMiddleware,
  // combineReducers,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import history from './history'
import reducer from './redux'
// import { todoReducer } from './reducers/Todo'
import { configureStore } from '@reduxjs/toolkit'

declare var window: Window
interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default configureStore({
  reducer: reducer(history)
  // middleware: composeEnhancers(
  //   applyMiddleware(routerMiddleware(history), thunkMiddleware)
  // ),
})
