import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      signup: false,
      error: false
    }
  }
  render (){
    const authError = this.props.authError
    const signupBool = this.state.signup
    const signupHandler = (evt) => {
      evt.preventDefault()
      if(!evt.target.username.value || !evt.target.password.value || !evt.target.name.value) {
        this.setState({error: true})
      }
      else {
        this.props.signup(evt.target.name.value, evt.target.username.value, evt.target.password.value)
        this.setState({error: false})
      }
    }
    const loginHandler = (evt) => {
     evt.preventDefault()
      if(!evt.target.username.value || !evt.target.password.value) {
        this.setState({error: true})
      }
      else {
        this.props.login(evt.target.username.value, evt.target.password.value)
        this.setState({error: false})
      }
    }
    return (
      <div className="login-container">
        <img src="/images/logo.png" style={{marginRight: "50px"}}/>
        <form onSubmit={signupBool? signupHandler : loginHandler}>
          {signupBool? <input name="name" placeholder="Name" /> : null}
          <input name="username" placeholder="Email" />
          <input name="password" type="password" placeholder="Password"/>
          <button type="submit" value="Login">{signupBool? "Sign Up" : "Login"}</button>
        </form>

        {this.state.error? <span className="error-message">Please fill out all fields!</span> : authError? <span className="error-message">{authError}</span> : null  }
        <br />
        {signupBool? null : <button className="sign-up" type="submit" value="Signup" onClick={() => {this.setState({signup: true, error: false})}}>Sign Up!</button>}

      </div>
    )
  }
}

import {login, signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({authError: state.server}),
  {login, signup},
)(Login)
