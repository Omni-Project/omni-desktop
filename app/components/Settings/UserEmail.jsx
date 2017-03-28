import React, {Component} from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Button, ButtonToolbar, FormControl, FormGroup } from 'react-bootstrap'

export class UserEmail extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: props.user.email
    }
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
    <div style={{width: 500}}>
    <h1>Change your email</h1>
      <div className="settings-container">  
      <form>
        <div>
            <label className="settings-labels"><h4>Current email: </h4></label>
                <div className="settings-userinfo">
                    {this.state.email}
                </div>
        </div>
        <FormGroup
          controlId="formControlsEmail"
          validationState={this.getValidationState()}>
          <label className="settings-labels"><h4>New email: </h4></label>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter new email"
            onChange={this.handleChange}/>
          <Button className="save-button" href="#" bsSize="xsmall">save</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
      </div>
    </div>
    );
  }

}