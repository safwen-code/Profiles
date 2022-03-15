import React, { Fragment, useEffect } from 'react'
import { getProfileByUserID } from '../../action/profile'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinne from '../../components/layout/Spinne'
import { Link } from 'react-router-dom'

const ProfileUserId = ({
  getProfileByUserID,
  profile: { profile, loading },
}) => {
  let { id } = useParams()

  useEffect(() => {
    getProfileByUserID(id)
  }, [getProfileByUserID, id])

  return profile === null && loading ? (
    <Spinne />
  ) : (
    <Fragment>
      <div className="container-md">
        <Link to="/" className="btn btn-secondary mt-3">
          Go Back
        </Link>
        <div class="row">
          <div class="col-5 tex-center offset-md-3 mb-4 mt-3">
            <div class="card">
              <div class="card-body text-center">
                this profile for {profile.user.name}
              </div>
            </div>
          </div>
          <div className="row mt-3 ms-3 border border-dark">
            <div class="col-4">
              <img src={profile.imageUrl} class="card-img-top" alt="..." />
            </div>
            <div class="col-6 align-items-center pt-5 ms-5">
              <div className="card">
                <div className="card-body">
                  <h5 class="card-title">{profile.user.email}</h5>
                  <p class="card-text">{profile.status}</p>
                  <p className="card-text">{profile.company}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-5 mt-4 mb-4">
            <div class="col">
              <div class="p-3 border bg-light">skills</div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">githubusername social thing</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profile,
})
export default connect(mapStateToProps, { getProfileByUserID })(ProfileUserId)
