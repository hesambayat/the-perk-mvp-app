import React from 'react'

export default props => {
  return (
    <button
      className={`btn ${props.data === undefined ? 'btn--deactive' : ''} mt-4 mb-3`}
    >
      Give recognition
    </button>
  )
}
