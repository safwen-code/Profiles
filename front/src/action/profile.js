import {
  PROFILE_USER,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFIELS,
} from './types'

import axios from 'axios'
import { setAlert } from './AlertAction'

// getcurrentProfile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    //get the data
    const res = await axios.get('/profile/me')
    console.log(res)
    //disptach to reducer
    dispatch({
      type: PROFILE_USER,
      payload: res.data,
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

//create Profile
export const createProfile = (FormData, navigate, edite = false) => async (
  dispatch,
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post('/profile/addProfile', FormData, config)
    console.log('create profile', res.data)
    dispatch({
      type: PROFILE_USER,
      payload: res.data,
    })

    dispatch(setAlert('profile created', 'alert-success'))

    navigate('/profile')
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

//get all Profile
export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/profile/')
    dispatch({
      type: GET_PROFIELS,
      payload: res.data,
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

//get profile by userID
export const getProfileByUserID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/profile/user/${id}`)
    dispatch({
      type: PROFILE_USER,
      payload: res.data,
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

//add Experience
export const Addexperience = (FormData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const res = await axios.put('/profile/experience', FormData, config)
    console.log(res.data)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })
    dispatch(setAlert('add Experience', 'alert-success'))
    navigate('/profile')
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

//addEducation
export const Addeducation = (FormData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    const res = await axios.put('/profile/education', FormData, config)
    console.log(res.data)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    })
    dispatch(setAlert('add education', 'alert-success'))
    navigate('/profile')
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger')))
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

//deleteExperience
export const deleteExperience = () => async (dispatch) => {}

//delete Profile
export const deleteProfile = () => async (dispatch) => {}
