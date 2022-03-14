import React from 'react'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import { connect } from 'react-redux'
import { LoadUser } from '../../action/authAction'
import { Link } from 'react-router-dom'

const ProfileUser = ({ user }) => {
  const { name, email } = user

  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">
            Titel of Alonger featured for my profile
            {name}
          </h1>
          <p className="lead my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {email}
          </p>
          <p className="lead mb-0">
            create a profile and partage please
            <Link to="/createProfile" className="btn btn-secondary ms-3 mt-3">
              Create Profile
            </Link>
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <Education />
        <Experience />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { LoadUser })(ProfileUser)
