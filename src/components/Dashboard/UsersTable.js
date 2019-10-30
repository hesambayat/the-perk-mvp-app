import React from 'react'
import UserRow from './UserRow'

export default props => {
  if (props.users === undefined) return null
  return (
    <>
      <div className="row card__header">
        <div className="col-5 col-md-4">
          <label className="ellipsis">Name</label>
        </div>
        <div className="col-3 hidden-sm-down">
          <label className="ellipsis">Department</label>
        </div>
        <div className="col-3">
          <label className="ellipsis">Last transaction</label>
        </div>
        <div className="col-4 col-md-2">
          <label className="ellipsis">Balanace</label>
        </div>
      </div>
      {props.users.map(user => <UserRow key={user.id} user={user} />)}
    </>
  )
}