import axios from 'axios'

import { LOGIN_USER, REGISTER_USER, ERROR_LOGIN, ERROR_REGISTER } from './types'
import { setAlert } from './AlertAction'
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
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((element) => {
        dispatch(setAlert(element.msg, 'alert-danger'))
      })
    }
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
    const errors = err.response.data
    console.log(errors)
    if (errors) {
      dispatch(setAlert(errors.msg, 'alert-danger'))
    }

    dispatch({
      type: ERROR_REGISTER,
    })
    //load user
  }
}
