import { combineReducers } from 'redux'
import auth from './auth'
import alert from './alert'
import profile from './profile'

const combinereducer = combineReducers({
  alert,
  auth,
  profile,
})

export default combinereducer
