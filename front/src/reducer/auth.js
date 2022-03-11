import { LOGIN_USER, REGISTER_USER, ERROR_AUTH } from '../action/types'

const initialState = {
  token: null,
  isAuth: false,
  loading: true,
  user: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return {}
    case ERROR_AUTH:
      return {}
    default:
      return state
  }
}
