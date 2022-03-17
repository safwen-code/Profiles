import axios from 'axios'

import {
  LOGIN_USER,
  REGISTER_USER,
  ERROR_LOGIN,
  ERROR_REGISTER,
  LOAD_USER,
  FAIL_USER,
  LOGOUT_SUCCESS,
} from './types'
import { setAlert } from './AlertAction'

import setAuthToken from '../util/setAuthToken'

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
    dispatch(LoadUser())
  } catch (err) {
    // console.log(errors)
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
  } catch (err) {
    // const errors = err.response.data.errors
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    // }

    dispatch({
      type: ERROR_REGISTER,
    })
    //load user
  }
}

//load User
export const LoadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('/auth/me')

    dispatch({
      type: LOAD_USER,
      payload: res.data,
    })
  } catch (error) {
    console.log('error loaduser')
    dispatch({
      type: FAIL_USER,
    })
  }
}

//logout User
export const Logout = () => async (dispatch) => {
  console.log('logout')
  dispatch({
    type: LOGOUT_SUCCESS,
  })
}
