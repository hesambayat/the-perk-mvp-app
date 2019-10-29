import React from 'react'
import { Header } from '../elements'
import * as Components from '../components/Dashboard'

export default () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8">
            <Components.Users />
          </div>
        </div>
      </div>
    </>
  )
}