import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProfileItem from './ProfileItem'
import Spinne from '../layout/Spinne'
const ListProfile = () => {
  const [profiles, setprofiles] = useState('')

  const getAllProfile = async (payload) => {
    try {
      const res = await axios.get('/profile/')
      if (res.status === 200) {
        setprofiles(res.data)
      }
    } catch (error) {
      console.log('error with axios')
    }
  }
  useEffect(() => {
    getAllProfile()
  }, [])
  console.log(profiles)
  return (
    <div className="border border-dark mt-5 container ">
      {profiles.length === 0 ? <Spinne /> : <ProfileItem />}
    </div>
  )
}

export default ListProfile
