import React, { Fragment, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { createProfile } from '../../action/profile'
import { useNavigate } from 'react-router-dom'
import { withRouter } from '../../Routes/withRouter'

const CreateProfile = ({ createProfile }) => {
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
    imageUrl: '',
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
    imageUrl,
  } = formData

  let navigate = useNavigate()

  const forma = useRef(null)

  const onSubmitForm = (e) => {
    e.preventDefault()
    const data = new FormData(forma.current)
    console.log(data)

    createProfile(data, navigate)
  }

  const display = (e) => {
    e.preventDefault()
    ToggelSocialField(!displaySocialInput)
  }

  return (
    <div className="container border border-dark mt-3">
      <h3 className="text-center fst-normal">create profile</h3>
      <form className="row g-3 " ref={forma}>
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
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, skills: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, githubusername: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            image
          </label>
          <div class="col-sm-10">
            <input
              type="file"
              class="form-control"
              id="inputPassword"
              name="imageUrl"
              defaultValue={imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.files[0] })
              }
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
                  onChange={(e) =>
                    setFormData({ ...formData, facebook: e.target.value })
                  }
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
                  name="linkedIn"
                  value={linkedIn}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedIn: e.target.value })
                  }
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

export default connect(null, { createProfile })(withRouter(CreateProfile))
