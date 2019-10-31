import React from 'react'

export default () => {
  return (
    <>
      <div
        className="card mt-6"
        style={{
          backgroundColor: '#fffdf2',
          marginTop: 'calc(var(--spacing) * 4.5)'
        }}
      >
        <h5 className="mt-0">Time cycles</h5>
        <p>To inspect users' monthly vouchers update, Time has been scaled down to <mark>1:4320</mark>, which means a month is equal to 10 minutes to this MVP.</p>
        <h5>Subscriptions</h5>
        <p><strong>User:</strong> When a new user adds to the db userSubscription prepend the user to list without refreshing the page.</p>
        <p><strong>Transiction:</strong> User's last transition and balance will update on the background as soon as a user gets recognition or spends money.</p>
        <h5>Demo</h5>
        <p>A script is running on the background, selects users, and purchases random items from a made-up market on behalf of the user.</p>
      </div>
    </>
  )
}
