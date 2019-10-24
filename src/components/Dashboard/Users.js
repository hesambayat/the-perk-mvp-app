import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api'

export default () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    const load = async () => {
      const users = await getUsers()

      setUsers(users)
    }

    const emit = setTimeout(load, 0)
    return () => clearTimeout(emit)
  }, [])

  if (users === undefined) {
    return (<p>Loading...</p>)
  }

  return (
    <>
      <h1>Users</h1>
      {users && users.map(user => <p>{user}</p>)}
    </>
  )

}