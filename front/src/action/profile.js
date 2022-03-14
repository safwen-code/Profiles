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
export const getCurrentProfile = () => async (dispatch) => {}

//create Profile
export const createProfile = () => async (dispatch) => {}

//add Experience
export const Addexperience = () => async (dispatch) => {}

//addEducation
export const Addeducation = () => async (dispatch) => {}

//deleteExperience
export const deleteExperience = () => async (dispatch) => {}

//delete Profile
export const deleteProfile = () => async (dispatch) => {}

//get all Profile
export const getProfiles = () => async (dispatch) => {}

//get profile by userID
export const getProfileByUserID = () => async (dispatch) => {}
