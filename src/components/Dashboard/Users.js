import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Queries } from '../../gql'
import Errors from './Errors'
import GiveRecognition from './GiveRecognition'
import AddNewUser from './AddNewUser'
import UsersTable from './UsersTable'

export default () => {
  const { data, error, loading } = useQuery(Queries.USERS, { errorPolicy: 'all' });
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Employees</h3>
        </div>
        <div className="col-auto">
          <AddNewUser />
          <GiveRecognition data={data} />
        </div>
      </div>
      <Errors errors={error} />
      <div className="card">
        {loading && <p>Loading...</p>}
        <UsersTable data={data} />
      </div>
    </>
  )

}