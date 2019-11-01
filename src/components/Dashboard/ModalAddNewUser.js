import React, { useCallback, useRef } from 'react'
import Select from 'react-select'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Mutations, Queries } from '../../gql'
import { useModal } from '../../context/modal-context'
import selectStyles from '../../style/select-styles'
import Errors from './Errors'

export default () => {
  const name = useRef()
  const email = useRef()
  const department = useRef({})
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
  const options = []
  if (query.data) {
    query.data.departments.forEach(({ id: value, name: label }) => {
      options.push({
        value,
        label
      })
    })
  }

  return (
    <div className="row">
      <div className="col-12">
        <h4 className="mt-0 mb-0">Add employee</h4>
        <p style={{ color: 'var(--color--body-alt)' }}>
          <small>You will be billed monthly for each employee you add.</small>
        </p>
      </div>
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
        <Select
          isSearchable
          placeholder="Select a department"
          styles={selectStyles}
          noOptionsMessage={({ inputValue }) => inputValue ? "Nothing found!" : "Loading..."}
          onChange={({ value }) => department.current = { value }}
          options={options}
        />
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
            minWidth: '8.125rem'
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
