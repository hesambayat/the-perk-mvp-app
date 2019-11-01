import React, { useCallback, useEffect, useRef } from 'react'
import Select from 'react-select'
import { useMutation } from '@apollo/react-hooks'
import { Mutations } from '../../gql'
import { useModal } from '../../context/modal-context'
import selectStyles from '../../style/select-styles'
import Errors from './Errors'
import graphic from '../../img/coins.jpg'

export default props => {
  const users = useRef([])
  const title = useRef()
  const { unSetModal } = useModal()
  const [createCredit, { error, loading }] = useMutation(Mutations.CREATE_CREDIT, { errorPolicy: 'all' })
  const createCreditsCallback = useCallback(() => {
    if (loading === true) return

    const amount = document.querySelector('[name="recognition"]:checked')

    Promise.all(users.current.map(({ value: user }) =>
      createCredit({
        variables: {
          title: title.current.value,
          amount: amount && amount.value,
          user
        }
      }))).then(unSetModal)
  }, [loading, createCredit, unSetModal])
  useEffect(() => {
    document.querySelectorAll('[name="recognition"]')[1].checked = true
  }, [])
  const recognitions = [30, 100, 250]
  const options = []
  if (props.users) {
    props.users.forEach(({ id: value, name: label }) => {
      options.push({
        value,
        label
      })
    });
  }
  return (
    <div className="row">
      <div className="col-4 hidden-lg-down">
        <img
          src={graphic}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
      </div>
      <div className="col-12 col-xl-8">
        <div className="col-12">
          <h4 className="mt-0 mb-4">Give recognition</h4>
        </div>
        <div className="col-12">
          <Errors errors={error} />
        </div>
        <div className="col-12 mb-2">
          <div className="row no-gutters">
            {recognitions.map(recognition => (
              <div key={`recognition--${recognition}`} className="col">
                <label className="radio-recognition">
                  <input type="radio" name="recognition" value={recognition} />
                  <span><strong>${recognition}</strong></span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 mb-2">
          <label className="label">Who to recognize?</label>
          <Select
            isMulti
            isSearchable
            placeholder="Search by employee name"
            styles={selectStyles}
            noOptionsMessage={({ inputValue }) => inputValue ? "Nothing found!" : "Loading..."}
            onChange={selected => users.current = selected}
            options={options}
          />
        </div>
        <div className="col-12 mb-4">
          <label className="label">Write a short message:</label>
          <input ref={title} type="text" placeholder="E.g. Happy holiday!" />
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
            className={`btn ${loading ? 'btn--inprogress' : ''}`}
            style={{
              minWidth: '8.125rem'
            }}
            onClick={() => {
              createCreditsCallback()
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
