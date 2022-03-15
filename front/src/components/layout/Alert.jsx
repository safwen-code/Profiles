import React from 'react'
import { connect } from 'react-redux'

const Alert = ({ alert }) => {
  return (
    alert != null &&
    alert.length > 0 &&
    alert.map((el) => (
      <div class={`alert ${el.type}`} key={el.id} role="alert">
        {el.msg}
      </div>
    ))
  )
}
const mapStateToProps = (state) => ({
  alert: state.alert,
})
export default connect(mapStateToProps)(Alert)
