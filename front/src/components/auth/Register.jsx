import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { RegisterUser } from '../../action/authAction'

const Register = ({ isAuth, RegisterUser }) => {
  const [FormaData, setFormaData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const { name, email, password } = FormaData
  const onchangeHundler = (e) => {
    setFormaData({ ...FormaData, [e.target.name]: e.target.value })
  }

  let navigate = useNavigate()
  const onsubmitHundler = () => {
    console.log(FormaData)
    RegisterUser({ name, email, password })
  }
  console.log(isAuth)
  if (isAuth) {
    navigate('/profile')
  }
  return (
    <div className="container border border-dark mt-3">
      <h3 className="mb-3 fw-normal text-center">Register Please</h3>
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
      <div className="form-floating mb-3">
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          placeholder="your name please"
          onChange={onchangeHundler}
        />
        <label for="floatingInput">Name </label>
      </div>

      <button className="btn btn-primary" onClick={onsubmitHundler}>
        Sing In
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { RegisterUser })(Register)
