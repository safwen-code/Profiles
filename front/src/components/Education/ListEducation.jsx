import React from 'react'
import Moment from 'react-moment'

const ListEducation = ({ education }) => {
  console.log(education)
  const eduMapper = education.map((edu) => (
    <tbody>
      <tr key={edu._id}>
        <th scope="row">1</th>
        <td>{edu.school}</td>
        <td>{edu.fieldofstudy}</td>
        <td>{edu.degree}</td>
        <td>{edu.description}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>
        </td>
        <td>
          {edu.to === null ? (
            'now'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger ms-2"
            onClick={() => console.log('hi from delete education')}
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
            <th scope="col">school</th>
            <th scope="col">fieldofstudy</th>
            <th scope="col">degree</th>
            <th scope="col">description</th>
            <th scope="col">from</th>
            <th scope="col">to</th>
          </tr>
        </thead>
        {eduMapper}
      </table>
    </>
  )
}

export default ListEducation
