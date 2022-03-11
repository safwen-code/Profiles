import React from 'react'
import education from '../../assets/education.jpg'

const Education = () => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            Education
          </strong>
          <h3 className="mb-0">Featured Post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">
            this letter presentation for my education
          </p>
          <a href="" alt="">
            more
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            src={education}
            class="card-img-top rounded-circle mx-auto d-block"
            alt="..."
            style={{ height: '140 px', width: '140px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Education
