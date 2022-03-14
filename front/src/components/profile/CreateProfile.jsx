import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { createProfile } from '../../action/profile'
import { useNavigate } from 'react-router-dom'
import { withRouter } from '../../Routes/withRouter'

const CreateProfile = () => {
  const [displaySocialInput, ToggelSocialField] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    bio: '',
    status: '',
    githubusername: '',
    skills: '',
    facebook: '',
    linkedIn: '',
  })
  const {
    company,
    website,
    bio,
    status,
    githubusername,
    skills,
    facebook,
    linkedIn,
  } = formData
  const onChangeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const display = (e) => {
    e.preventDefault()
    ToggelSocialField(!displaySocialInput)
  }

  return (
    <div className="container border border-dark mt-3">
      <h3 className="text-center fst-normal">create profile</h3>
      <form className="row g-3 ">
        <div class="mb-3 row mt-3">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            select a profile status
          </label>
          <div class="col-sm-10">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="status"
              value={status}
              onChange={(e) => onChangeValue(e)}
            >
              <option value>Open this select menu</option>
              <option value="developper">developper</option>
              <option value="senior developper">senior developper</option>
              <option value="junior developper">junior developper</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            your wor in company
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="company"
              value={company}
              onChange={(e) => onChangeValue(e)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            website
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="website"
              value={website}
              onChange={(e) => onChangeValue(e)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            skills
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="skills"
              value={skills}
              onChange={(e) => onChangeValue(e)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            githubusername
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="githubusername"
              value={githubusername}
              onChange={(e) => onChangeValue(e)}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            bio
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              name="bio"
              value={bio}
              onChange={(e) => onChangeValue(e)}
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-primary mt-1 mb-2"
            onClick={(e) => display(e)}
          >
            Add social network
          </button>
        </div>

        {displaySocialInput ? (
          <Fragment>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                facebook
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChangeValue(e)}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                linkedIn
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  name="linkeIn"
                  value={linkedIn}
                  onChange={(e) => onChangeValue(e)}
                />
              </div>
            </div>
          </Fragment>
        ) : (
          <h1>hello</h1>
        )}

        <div>
          <button
            className="btn btn-primary ms-4 mb-3"
            onClick={(e) => onSubmitForm(e)}
          >
            {' '}
            submit
          </button>
          <button className="btn btn-secondary ms-4 mb-3"> go back</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(CreateProfile)
