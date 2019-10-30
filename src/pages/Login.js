import React, { useEffect, useCallback, useRef } from 'react'
import { useAuth } from '../context/auth-context'
import { Centered } from '../elements'
import * as Components from '../components/Login'

export default () => {
  const email = useRef()
  const password = useRef()
  const { error, loading, login } = useAuth();
  useEffect(() => {
    // for demo purposes
    email.current.value = 'darth@starwars.com'
    password.current.value = '12345678'
  }, [])
  const loginCallback = useCallback(() => {
    if (loading === true) return

    login({
      variables: {
        email: email.current.value,
        password: password.current.value
      }
    })
  }, [loading, login])
  return (
    <Centered>
      <h4 className="mt-0">Welcome to <span>The Perk</span></h4>
      <p>Give your employees endless rewards and experiences with just one card.</p>
      <div className="mt-3 mb-3">
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="Password" />
      </div>
      <Components.Errors errors={error} />
      <button
        className={loading ? "btn btn--inprogress" : "btn"}
        style={{ minWidth: '13.125rem' }}
        onClick={loginCallback}
      >
        Login
      </button>
    </Centered>
  )
}