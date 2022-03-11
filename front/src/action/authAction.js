import axios from 'axios'
import { LOGIN_USER, REGISTER_USER, ERROR_LOGIN, ERROR_REGISTER } from './types'

//Login User
export const LoginUser = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify({ email, password })
    const res = await axios.post('/auth/login', body, config)
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    })
    //load user
  } catch (error) {
    console.error('err login')
    dispatch({
      type: ERROR_LOGIN,
    })
  }
}

//register User
export const RegisterUser = ({ name, email, password }) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify({ name, email, password })
    const res = await axios.post('/user/register', body, config)
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    })
    //load user
    //clear profile
  } catch (error) {
    dispatch({
      type: ERROR_REGISTER,
    })
    //load user
  }
}
