import React from 'react'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'

const ProfileUser = () => {
  return (
    <div className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">
            Titel of Alonger featured for my profile
          </h1>
          <p className="lead my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <p className="lead mb-0">add like and partage please</p>
        </div>
      </div>
      <div className="row mb-2">
        <Education />
        <Experience />
      </div>
    </div>
  )
}

export default ProfileUser
