import React, { useState } from 'react'

const Login = () => {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
    checked: false,
  })
  const { email, password, checked } = FormData
  const onchangeHundler = (e) => {
    setFormData({
      ...FormData,
      checked: !checked,
      [e.target.name]: e.target.value,
    })
  }
  const onsubmitHundler = (e) => {
    e.preventDefault()
    console.log(FormData)
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
          <input
            type="checkbox"
            name="checked"
            value={checked}
            onChange={onchangeHundler}
          />
          "Remember me"
        </label>
      </div>
      <button className="btn btn-primary" onClick={onsubmitHundler}>
        Sing In
      </button>
    </div>
  )
}

export default Login
