import React from 'react'
import UserRow from './UserRow'

export default props => {
  if (props.data === undefined) return null
  return (
    <>
      {props.data.users.map(user => <UserRow key={user.id} user={user} />)}
    </>
  )
}