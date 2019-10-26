import React from 'react'
import { AuthProvider } from './auth-context'
import { UserProvider } from './user-context'

const AppProviders = props => {
  return (
    <AuthProvider>
      <UserProvider>{props.children}</UserProvider>
    </AuthProvider>
  )
}

export { AppProviders }