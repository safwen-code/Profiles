import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import combinereducer from './reducer/index'

const initialState = {}

const middelware = [thunk]

const store = createStore(
  combinereducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware)),
)

export default store
