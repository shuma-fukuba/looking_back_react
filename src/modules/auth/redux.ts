import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'
import { AppState } from '../redux'

const create = actionCreatorFactory('auth')
const createAsync = asyncFactory<AppState>(create)

const updateCurrentUser = create('UPDATE_CURRENT_AUTHENTICATED_USER')
