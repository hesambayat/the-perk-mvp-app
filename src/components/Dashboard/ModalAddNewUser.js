import React, { useCallback, useRef } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Mutations, Queries } from '../../gql'
import { useModal } from '../../context/modal-context'
import Errors from './Errors'

export default () => {
  const name = useRef()
  const email = useRef()
  const department = useRef()
  const { unSetModal } = useModal()
  const [createUser, { error, loading }] = useMutation(Mutations.CREATE_USER, { errorPolicy: 'all' })
  const query = useQuery(Queries.DEPARTMENTS, { errorPolicy: 'all' })
  const createUserCallback = useCallback(() => {
    if (loading === true) return

    createUser({
      variables: {
        name: name.current.value,
        email: email.current.value,
        department: department.current.value
      }
    }).then(unSetModal)
  }, [loading, createUser, unSetModal])
  return (
    <div className="row">
      <div className="col-12">
        <Errors errors={error} />
      </div>
      <div className="col-12 col-xl-6 mb-2">
        <label className="label">Full name</label>
        <input ref={name} type="text" placeholder="John Doe" />
      </div>
      <div className="col-12 col-xl-6 mb-2">
        <label className="label">Email</label>
        <input ref={email} type="email" placeholder="john@example.com" />
      </div>
      <div className="col-12 mb-4">
        <label className="label">Department</label>
        <select ref={department}>
          {query.data && query.data.departments.map(department => <option key={department.id} value={department.id}>{department.name}</option>)}}
        </select>
      </div>
      <div className="col-12 text-right">
        <button
          className="btn btn--link"
          style={{
            marginRight: 'calc(var(--spacing) * 0.5)'
          }}
          onClick={() => {
            unSetModal()
          }}
        >
          Cancel
          </button>
        <button
          className={`btn btn--secondary ${loading ? 'btn--inprogress' : ''} ${query.loading ? 'btn--deactive' : ''}`}
          style={{
            minWidth: '13.125rem'
          }}
          onClick={() => {
            !query.loading && createUserCallback()
          }}
        >
          Save
          </button>
      </div>
    </div>
  )
}
