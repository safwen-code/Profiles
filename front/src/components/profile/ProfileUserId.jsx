import React, { useEffect } from 'react'
import { getProfileByUserID } from '../../action/profile'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProfileUserId = ({ getProfileByUserID }) => {
  let { id } = useParams()

  useEffect(() => {
    getProfileByUserID(id)
  }, [getProfileByUserID, id])

  return (
    <div className="container-md">
      <div class="row">
        <div class="col-5 tex-center offset-md-3 mb-4 mt-3">
          <div class="card">
            <div class="card-body text-center">this profile for userName</div>
          </div>
        </div>
        <div className="row mt-3 ms-3 border border-dark">
          <div class="col-4">
            <img src="..." class="card-img-top" alt="..." />
          </div>
          <div class="col-6">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">user Email</h5>
                <p class="card-text">status</p>
                <p className="card-text">company</p>
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
  )
}

const mapStateToProps = (state) => ({})
export default connect(null, { getProfileByUserID })(ProfileUserId)
