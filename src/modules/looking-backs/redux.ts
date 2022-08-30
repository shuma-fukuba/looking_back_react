import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'
import { AppState } from '../redux'
import { Optional } from '../../entities/base'

export type PageType = Optional<
  'home' | 'looking_back' | 'learning_time' | 'curriculums' | 'users'
> | null

const create = actionCreatorFactory('lookingBack')
const createAsync = asyncFactory<AppState>(create)

// redux actions
export const actions = {}

// define state type
export type State = {}

// redux initial state
export const initialState: State = {}

// reducers
export const reducer = reducerWithInitialState(initialState)
