import {
  PROFILE_USER,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFIELS,
} from '../action/types'

const initialState = {
  profile: null,
  profiles: {},
  loading: true,
  error: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case PROFILE_USER:
    case UPDATE_PROFILE:
      return {}
    case GET_PROFIELS:
      return {}
    case PROFILE_ERROR:
      return {}
    case CLEAR_PROFILE:
      return {}
    default:
      return state
  }
}
