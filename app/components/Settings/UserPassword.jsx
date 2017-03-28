import React, {Component} from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Button, ButtonToolbar, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

export default class UserPassword extends Component {
  constructor(props){
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const newState = { [e.target.name]: e.target.value }
    if (e.target.value.length < 1) {newState.error = 'Please enter an email'}
    else {newState.error = null}
    this.setState(Object.assign({}, newState))
  }

  handleSubmit(){
    if (this.state.oldPassword < 1 || this.state.newPassword < 1) {
      this.setState({error: 'Please enter a password'})
      return;
    } else {
      this.props.onSave("editPass", "password", this.state.newPassword, this.state.oldPassword)
    }
  }

 render() {
   const error = this.props.serverError || this.state.error
    return (
    <div style={{width: 450}}>
    <h4>Change your password</h4>
      <div className="settings-container">
        <form>
        <FormGroup
          controlId="formBasicText"
          >
          <ControlLabel><h5>Current Password: </h5></ControlLabel>
          <FormControl
            type="password"
            name="oldPassword"
            value={this.state.oldPassword}
            className={this.state.error?"error-form": ""}
            placeholder="Enter your current password"
            onChange={this.handleChange}/>

          <ControlLabel><h5>New Password: </h5></ControlLabel>
          <FormControl
            type="password"
            name="newPassword"
            value={this.state.newPassword}
            className={this.state.error?"error-form": ""}
            placeholder="Enter a new password"
            onChange={this.handleChange}/>
          {error ? <HelpBlock className="error-message">{error}</HelpBlock> : null }
          <Button className="save-button" href="#" bsSize="small" onClick={this.handleSubmit}>Save</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
      </div>
    </div>
    );
  }
}
