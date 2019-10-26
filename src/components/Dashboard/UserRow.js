import React from 'react'

export default props => {
  console.log('%cuser', 'color:deeppink', props.user)
  return (
    <div className="row">
      <div className="col-4">
        <label>{props.user.name}</label>
      </div>
      <div className="col-3">
        <label className="cba">{props.user.name}</label>
      </div>
      <div className="col-3">
        <label className="cba">{props.user.name}</label>
      </div>
      <div className="col-2">
        <label className="cba">{props.user.rule}</label>
      </div>
    </div>
  )
}
