import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'
import { AppState } from '~/modules/redux'
import { Optional } from '~/entities/base'
import { User } from '~/entities/user'
import api from '~/modules/auth/api'

export type PageType = Optional<
  'home' | 'looking_back' | 'learning_time' | 'curriculums' | 'users'
> | null

const create = actionCreatorFactory('auth')
const createAsync = asyncFactory<AppState>(create)

const updateToken = create<string | null>('UPDATE_TOKEN')
const updateUser = create<User | null>('UPDATE_USER')

// redux actions
export const actions = {
  updateToken,
  updateUser,
  login: createAsync<{ username: string; password: string }, {}, Error>(
    'LOGIN',
    async ({ username, password }, dispatch, getState) => {
      const res = await api.createToken(username, password)
      const { data } = res
      console.log(data)
    }
  ),
  logout: createAsync<{}, {}, Error>(
    'LOGOUT',
    async (_, dispatch, getState) => {
      dispatch(updateToken(null))
      dispatch(updateUser(null))
    }
  )
}

// define state type
export type State = {
  token: string | null
  user: User | null
}

// redux initial state
export const initialState: State = {
  token: null,
  user: null
}

// reducers
export const reducer = reducerWithInitialState(initialState)
  .case(actions.updateToken, (state, token) => {
    return { ...state, token }
  })
  .build()
