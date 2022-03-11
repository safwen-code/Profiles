import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProfileItem = () => {
  return (
    <div class="col col-lg-4 mt-2 mb-2">
      <div class="card car-cover h-100" style={{ width: '18rem' }}>
        <img
          src=""
          class="card-img-top rounded-circle mx-auto d-block"
          alt="..."
          style={{ height: '140 px', width: '140px' }}
        />
        <div class="card-body">
          <h5 className="card-titel">
            name<span className="ms-2">age</span>
          </h5>
          <h6 className="card-subtitle mb-2 text-mited">profile descritpion</h6>
          <p class="card-text">descrption</p>
          <Link to="" className="btn btn-primary">
            show more
          </Link>
        </div>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {}

export default ProfileItem
