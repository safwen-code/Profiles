import React, { useState } from 'react'
import { connect } from 'react-redux'
import { LoginUser } from '../../action/authAction'
import { useNavigate } from 'react-router-dom'

const Login = ({ auth: { loading, isAuth }, LoginUser }) => {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = FormData
  const onchangeHundler = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    })
  }

  let navigate = useNavigate()
  const onsubmitHundler = (e) => {
    e.preventDefault()
    LoginUser(email, password)
  }
  if (isAuth) {
    navigate('/')
  }
  return (
    <div className="container border border-dark mt-3">
      <h3 className="mb-3 fw-normal text-center">Login Please</h3>
      <div className="form-floating col  d-flex align-self-center">
        <input
          type="text"
          value={email}
          name="email"
          className="form-control"
          placeholder="your email please"
          onChange={onchangeHundler}
        />
        <label for="floatingInput">Email Adress</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="password"
          value={password}
          className="form-control"
          placeholder="your password please"
          onChange={onchangeHundler}
        />
        <label for="floatingInput">password Adress</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" name="checked" />
          "Remember me"
        </label>
      </div>
      <button className="btn btn-primary" onClick={onsubmitHundler}>
        Sing In
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, { LoginUser })(Login)
