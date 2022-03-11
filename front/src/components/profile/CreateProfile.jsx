import React, { Fragment, useState } from 'react'

const CreateProfile = () => {
  const [FormData, setFormData] = useState({
    company: '',
    website: '',
    bio: '',
    status: '',
    githubusername: '',
    skills: '',
    facebook: '',
    linkeIn: '',
  })

  const [displaySocial, setdisplaySocial] = useState(false)

  const {
    company,
    website,
    bio,
    status,
    githubusername,
    skills,
    facebook,
    linkeIn,
  } = FormData

  const onchangeHundler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }

  const onsubmitHundler = (e) => {
    e.preventDefault()

    console.log(FormData)
  }
  return (
    <div className="container border border-dark mt-3">
      <h3 className="text-center fst-normal">create profile</h3>
      <form className="row g-3 " onSubmit={onsubmitHundler}>
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
              onChange={onchangeHundler}
            >
              <option selected>Open this select menu</option>
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
              onChange={onchangeHundler}
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
              onChange={onchangeHundler}
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
              onChange={onchangeHundler}
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
              onChange={onchangeHundler}
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
              onChange={onchangeHundler}
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-primary mt-1 mb-2"
            onClick={(e) => setdisplaySocial(!displaySocial)}
          >
            Add social network
          </button>
        </div>

        {displaySocial && (
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
                  onChange={onchangeHundler}
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
                  value={linkeIn}
                  onChange={onchangeHundler}
                />
              </div>
            </div>
          </Fragment>
        )}

        <div>
          <button className="btn btn-primary ms-4 mb-3"> submit</button>
          <button className="btn btn-secondary ms-4 mb-3"> go back</button>
        </div>
      </form>
    </div>
  )
}

export default CreateProfile
