import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import ProfileItem from './ProfileItem'
import Spinne from '../layout/Spinne'
import { getProfiles } from '../../action/profile'
import profile from '../../reducer/profile'

const ListProfile = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <div className="border border-dark mt-5 container ">
      <div>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        ) : (
          <Spinne />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})
export default connect(mapStateToProps, { getProfiles })(ListProfile)
