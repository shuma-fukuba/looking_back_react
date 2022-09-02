import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'
import { AppState } from '~/modules/redux'
import { Optional } from '~/entities/base'

export type PageType = Optional<
  'home' | 'looking_back' | 'learning_time' | 'curriculums' | 'users'
> | null

const create = actionCreatorFactory('auth')
const createAsync = asyncFactory<AppState>(create)

const updateToken = create<string>('UPDATE_TOKEN')

// redux actions
export const actions = {
  updateToken
}

// define state type
export type State = {
  token: string
}

// redux initial state
export const initialState: State = {
  token: ''
}

// reducers
export const reducer = reducerWithInitialState(initialState).case(
  actions.updateToken,
  (state, token) => {
    return { ...state, token }
  }
)
