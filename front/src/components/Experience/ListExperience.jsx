import React from 'react'
import Moment from 'react-moment'

const ListExperience = ({ experience }) => {
  console.log(experience)
  const expMapper = experience.map((exp) => (
    <tbody>
      <tr key={exp._id}>
        <th scope="row">1</th>
        <td>{exp.titel}</td>
        <td>{exp.company}</td>
        <td>{exp.location}</td>
        <td>{exp.description}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>
        </td>
        <td>
          {exp.to === null ? (
            'now'
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger ms-2"
            onClick={() => console.log('hi from delete experience')}
          >
            delete
          </button>
        </td>
      </tr>
    </tbody>
  ))

  return (
    <>
      <h5 className="text-center mt-2 mb-4">List Experience</h5>
      <table class="table table-sm table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titel</th>
            <th scope="col">comapany</th>
            <th scope="col">location</th>
            <th scope="col">description</th>
            <th scope="col">from</th>
            <th scope="col">to</th>
          </tr>
        </thead>
        {expMapper}
      </table>
    </>
  )
}

export default ListExperience
