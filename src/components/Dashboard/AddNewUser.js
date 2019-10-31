import React from 'react'
import { useModal } from '../../context/modal-context'
import ModalAddNewUser from './ModalAddNewUser'

export default () => {
  const { setModal } = useModal()
  return (
    <button
      className="btn btn--secondary mt-4 mb-3"
      style={{
        marginRight: 'calc(var(--spacing) * 0.5)'
      }}
      onClick={() => {
        setModal(<ModalAddNewUser />)
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z" />
      </svg>
      <span className="hidden-sm-down">Add user</span>
    </button>
  )
}
