import React, { useEffect, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { Queries, Subscription } from '../../gql'
import { InlineLoading } from '../../elements'
import Errors from './Errors'
import GiveRecognition from './GiveRecognition'
import AddNewUser from './AddNewUser'
import UsersTable from './UsersTable'

export default () => {
  const [users, setUsers] = useState()
  const query = useQuery(Queries.USERS, { errorPolicy: 'all' })
  useSubscription(Subscription.CREDIT, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (users === undefined) {
        return
      }

      const { data: { credit: { node } } } = subscriptionData
      const subscription = users.map(user => {
        if (node.creditTo.id === user.id) {
          return { ...user, lastTransaction: node, balance: user.balance + node.amount }
        }

        return user
      })

      setUsers(subscription)
    }
  })
  useEffect(() => {
    if (query.data === undefined) {
      return
    }

    setUsers(query.data.users)
  }, [query.data])
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Employees</h3>
        </div>
        <div className="col-auto">
          <AddNewUser />
          <GiveRecognition users={users} />
        </div>
      </div>
      <Errors errors={query.error} />
      <div className="card">
        {query.loading && <InlineLoading />}
        <UsersTable users={users} />
      </div>
    </>
  )

}