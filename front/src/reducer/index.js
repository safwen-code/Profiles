import { combineReducers } from 'redux'
import auth from './auth'
import alert from './alert'
const combinereducer = combineReducers({
  auth,
  alert,
})

export default combinereducer
