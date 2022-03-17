import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getCurrentProfile } from '../../action/profile'
import ProfileUserPage from './ProfileUserPage'
import { Link } from 'react-router-dom'

const ProfileUser = ({ user, getCurrentProfile, profile }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">
            Titel of Alonger featured for my profile
            {user && user.name}
          </h1>
          <p className="lead my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {user && user.email}
          </p>
          <p className="lead mb-0">
            create a profile and partage please
            <Link to="/createProfile" className="btn btn-secondary ms-3 mt-3">
              Create Profile
            </Link>
          </p>
        </div>
      </div>
      {profile != null && <ProfileUserPage profile={profile} />}

      <div className="row mb-2"></div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.profile.profile,
})

export default connect(mapStateToProps, { getCurrentProfile })(ProfileUser)
