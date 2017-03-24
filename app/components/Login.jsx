import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      signup: false
    }
  }
  render (){
    const signupBool = this.state.signup
    const signupHandler = (evt) => {
      console.log('sign up!')
      evt.preventDefault()
      this.props.signup(evt.target.name.value, evt.target.username.value, evt.target.password.value)
    }
    const loginHandler = (evt) => {
      console.log('login!')
      evt.preventDefault()
      this.props.login(evt.target.username.value, evt.target.password.value)
    }
    return (
      <div className="login-container">
        <img src="/images/logo.jpg"/>
        <form onSubmit={signupBool? signupHandler : loginHandler}>
          {signupBool? <input name="name" placeholder="Name" /> : null}
          <input name="username" placeholder="Email" />
          <input name="password" type="password" placeholder="Password"/>
          <button type="submit" value="Login">{signupBool? "Sign Up" : "Login"}</button>
        </form>
        {signupBool? null : <button type="submit" value="Signup" onClick={() => {this.setState({signup: true})}}>Sign Up!</button>}
      </div>
    )
  }
}

import {login, signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login, signup},
) (Login)
