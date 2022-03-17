import React from 'react'
import ListExperience from '../Experience/ListExperience'
import ListEducation from '../Education/ListEducation'

const ProfileUserPage = ({ profile }) => {
  return (
    <div className="container">
      <div class="row mb-3">
        <div class="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="card-title">status</div>
              <h6 class="card-subtitle mb-2 text-muted">company</h6>
              <h6 class="card-subtitle mb-2 text-muted">website</h6>
              {profile.skills &&
                profile.skills.map((skill) => (
                  <h6 class="card-subtitle mb-2">{skill}</h6>
                ))}
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">{profile.user.name}</div>
              <h6 class="card-subtitle mb-2 text-muted">
                {profile.user.email}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        {profile.exprience.length > 0 && (
          <ListExperience experience={profile.exprience} />
        )}
      </div>
      <div className="row mb-2">
        {profile.education.length > 0 && (
          <ListEducation education={profile.education} />
        )}
      </div>
    </div>
  )
}
export default ProfileUserPage
