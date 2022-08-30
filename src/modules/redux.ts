import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers, Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import actionCreatorFactory, { AnyAction } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { RouterState } from 'connected-react-router'
import {
  reducer as lookingBackReducer,
  State as LookingBackState,
} from './looking-backs/redux'

export type ActionDispatch<T = any> = (props?: any) => Action<T>

type AsyncActionDispatchFunction<T = any> = (
  dispatch: ThunkDispatch<AppState, any, AnyAction>,
  getState: () => AppState,
  extraArgument: any
) => Promise<T>

export type AsyncActionDispatch<T = any> = (
  props?: any
) => AsyncActionDispatchFunction<T>

export type AsyncActionDispatchPromise<T = any> = (
  props?: any
) => Promise<AsyncActionDispatchFunction<T>>

type State = {
  initialized: boolean
}

const initialState: State = {
  initialized: false,
}

const create = actionCreatorFactory('app')
const initialize = create<boolean>('SET_INITIATED')

const actions = {
  initialize,
}

const reducer = reducerWithInitialState(initialState)
  .case(actions.initialize, (state, initialized) => {
    return { ...state, initialized }
  })
  .build()

export type AppState = {
  app: State
  router: RouterState
  lookingBacks: LookingBackState
}

const reducers = (history: History) =>
  combineReducers<AppState>({
    app: reducer,
    router: connectRouter(history),
    lookingBacks: lookingBackReducer,
  })

export default reducers
