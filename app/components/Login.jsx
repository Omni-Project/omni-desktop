import React from 'react'

export const Login = ({ login }) => (
  <div className="login-container">
    <img src="/images/logo.jpg"/>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" placeholder="Email" />
      <input name="password" type="password" placeholder="Password"/>
      <button type="submit" value="Login">Login</button>
    </form>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
