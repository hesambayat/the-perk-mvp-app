import React, { useState } from 'react'
import { useAuth } from '../context/auth-context'
import { Avatar } from '.'

export default () => {
  const [userMenu, setUserMenu] = useState(false)
  const { data: { user }, logout } = useAuth()
  const avatar = <Avatar name={user.name} color="var(--color--secondary)" />
  return (
    <header className="site-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h5 className="mt-0 mb-0"><span>Dashboard</span></h5>
          </div>
          <div className="col-auto">
            <label onClick={() => setUserMenu(true)}>
              {avatar}
            </label>
            {userMenu && <button className="site-header__user-nav--close" onClick={() => setUserMenu(false)} />}
            <div className={`site-header__user-nav ${userMenu ? '' : 'hide'}`}>
              <div className="site-header__user-nav__header">
                {avatar}
                <span>{user.name}</span>
                <small>{user.email}</small>
              </div>
              <ul>
                <li className="signout"><button onClick={logout}>Sign out</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}