import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEducation = () => {
  const [FormData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    to: '',
    current: false,
    description: '',
    from: '',
  })
  const {
    school,
    degree,
    fieldofstudy,
    to,
    current,
    description,
    from,
  } = FormData

  let navigate = useNavigate()
  const [disabelDate, setAbeldate] = useState(false)

  const onchangeHundler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }
  const onsubmitHundler = (e) => {
    e.preventDefault()
    console.log(FormData)
    navigate('/listEducation')
  }
  return (
    <div className="container border border-dark mt-3">
      <h3 className="text-center fst-normal">AddEducation</h3>
      <form className="row g-3 " onSubmit={onsubmitHundler}>
        <div class="mb-3 row mt-3">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            school
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="school"
              value={school}
              onChange={onchangeHundler}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            fieldofstudy
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="fieldofstudy"
              value={fieldofstudy}
              onChange={onchangeHundler}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            degree
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="degree"
              value={degree}
              onChange={onchangeHundler}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            from Date
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="inputPassword"
              name="from"
              value={from}
              onChange={onchangeHundler}
            />
          </div>
        </div>
        <div className="row ms-1">
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="current"
              value={current}
              checked={current}
              onChange={(e) => {
                setFormData({ ...FormData, current: !current })
                setAbeldate(!disabelDate)
              }}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              current
            </label>
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            to date
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="inputPassword"
              name="to"
              value={to}
              onChange={onchangeHundler}
              disabled={disabelDate ? 'disabled' : ''}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            description
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="description"
              value={description}
              onChange={onchangeHundler}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary ms-4 mb-3"> submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddEducation
