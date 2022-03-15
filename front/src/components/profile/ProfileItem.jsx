import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'

const ProfileItem = ({ profile: { imageUrl, user, skills, status, _id } }) => {
  return (
    <div class="col col-lg-4 mt-2 mb-2">
      <div class="card car-cover h-100" style={{ width: '18rem' }}>
        <img
          src={imageUrl}
          class="card-img-top rounded-circle mx-auto d-block"
          alt="..."
          style={{ height: '140 px', width: '140px' }}
        />
        <div class="card-body">
          <h5 className="card-titel">
            {user.name}
            <span className="ms-2">{user.email}</span>
          </h5>
          <h6 className="card-subtitle mb-2 text-mited">{status}</h6>
          <p class="card-text">
            <ul class="list-group list-group-flush">
              {skills.map((skills, index) => (
                <li key={index} class="list-group-item">
                  <AiOutlineCheck color="blue" />
                  {skills}
                </li>
              ))}
            </ul>
          </p>
          <Link to={`/profile/${user._id}`} className="btn btn-primary">
            show more
          </Link>
        </div>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {}

export default ProfileItem
