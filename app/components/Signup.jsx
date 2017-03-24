import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export const Signup = ({ signup }) => (
      <div className="login-container">
        <img src="/images/logo.jpg"/>
        <form onSubmit={evt => {
          evt.preventDefault()
          signup(evt.target.name.value, evt.target.username.value, evt.target.password.value)
          }}>
          <input name="name" placeholder="Name" />
          <input name="username" placeholder="Email" />
          <input name="password" type="password" placeholder="Password"/>
          <button type="submit" value="Login">Sign Up</button>
        </form>
      </div>
)


import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
) (Signup)
