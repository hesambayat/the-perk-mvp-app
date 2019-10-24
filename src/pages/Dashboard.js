
import React from 'react'
import * as Components from '../components/Dashboard'

export default () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Components.Users />
        </div>
      </div>
    </div>
  )
}