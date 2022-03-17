import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Logout } from '../../action/authAction'

const Header = ({ auth: { loading, isAuth, user }, Logout }) => {
  const guestUser = (
    <Fragment>
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">
          list User
        </Link>
        <li class="nav-item">
          <Link class="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register">
            register
          </Link>
        </li>
      </li>
    </Fragment>
  )
  const authUser = (
    <Fragment>
      <li class="nav-item">
        <Link class="nav-link" to="/profile">
          profile
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/addEducation">
          addEducation
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/addExperience">
          addExperience
        </Link>
      </li>
      <li className="na-item">
        <Link className="nav-link" aria-current="page" to="/" onClick={Logout}>
          {user !== null && user.name}
          logOut
        </Link>
      </li>
    </Fragment>
  )
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {!loading && <Fragment>{isAuth ? authUser : guestUser}</Fragment>}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

Header.propTypes = {}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, { Logout })(Header)
