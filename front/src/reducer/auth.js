import {
  LOGIN_USER,
  REGISTER_USER,
  ERROR_LOGIN,
  ERROR_REGISTER,
  LOAD_USER,
  FAIL_USER,
  LOGOUT_SUCCESS,
} from '../action/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  loading: true,
  user: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload,
      }
    case LOGIN_USER:
    case REGISTER_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        loading: false,
        isAuth: true,
      }
    case FAIL_USER:
    case ERROR_LOGIN:
    case ERROR_REGISTER:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        loading: false,
        isAuth: false,
      }
    default:
      return state
  }
}
