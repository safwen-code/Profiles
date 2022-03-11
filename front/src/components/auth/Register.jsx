import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [FormaData, setFormaData] = useState({
    email: '',
    password: '',
    name: '',
    description: '',
  })
  const { name, email, password, description } = FormaData
  let navigate = useNavigate()
  const onchangeHundler = (e) => {
    setFormaData({ ...FormaData, [e.target.name]: e.target.value })
  }
  const onsubmitHundler = () => {
    console.log(FormaData)
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
      <div className="form-floating mb-3">
        <input
          type="text"
          name="description"
          value={description}
          className="form-control"
          placeholder="your description please"
          onChange={onchangeHundler}
        />
        <label for="floatingInput">description </label>
      </div>
      <button className="btn btn-primary" onClick={onsubmitHundler}>
        Sing In
      </button>
    </div>
  )
}

export default Register
