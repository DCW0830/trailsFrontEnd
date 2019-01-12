import { combineReducers } from 'redux'
import trailsReducers from './trailsReducers'
import usersReducers from './usersReducers'

export default combineReducers({trailsReducers, usersReducers})
