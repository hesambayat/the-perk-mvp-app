import React from 'react'
import { FormatMoney } from '../../lib'

export default props => {
  return (
    <div className="row card__row">
      <div className="col-5 col-md-4">
        <label className="ellipsis">{props.user.name}</label>
      </div>
      <div className="col-3 hidden-sm-down">
        <label className="cba">
          {props.user.department ? <span className="ellipsis">{props.user.department.name}</span> : '—'}
        </label>
      </div>
      <div className="col-3">
        <label className="cba">
          {props.user.lastTransaction ? (
            <>
              <small className="ellipsis" style={{ color: props.user.lastTransaction.amount < 0 ? 'var(--color--error)' : 'var(--color--body)'}}>{FormatMoney(props.user.lastTransaction.amount)}</small>
              <small className="ellipsis">{props.user.lastTransaction.title}</small>
            </>
          ) : '—'}
        </label>
      </div>
      <div className="col-4 col-md-2">
        <label className="ellipsis">{FormatMoney(props.user.balance)}</label>
      </div>
    </div>
  )
}
