import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'
import { AppState } from '~/modules/redux'

export const actions = {}

export type State = {}

export const initialState: State = {}

export const reducer = reducerWithInitialState(initialState)
