import React, {Component} from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Button, ButtonToolbar, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

export default class UserName extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const newState = { name: e.target.value }
    if (e.target.value.length < 1) {newState.error = 'Please enter a name'}
    else {newState.error = null}
    this.setState(Object.assign({}, newState))
  }

  handleSubmit(){
    if (this.state.name < 1) {
      this.setState({error: 'Please enter a name'})
      return;
    } else {
      this.props.onSave("editName", "name", this.state.name)
    }
  }

  render() {
    return (
    <div style={{width: 450}}>
    <h4>Change your name</h4>
      <div className="settings-container">
        <div>
            <label className="settings-labels"><h5>Current name: </h5></label>
                <div className="settings-userinfo">
                    {this.props.user.name}
                </div>
        </div>
        <form>
        <FormGroup
          controlId="formBasicText"
          >
          <ControlLabel><h5>New name: </h5></ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            className={this.state.error?"error-form": ""}
            placeholder="Enter new name"
            onChange={this.handleChange}/>
          {this.state.error? <HelpBlock className="error-message">{this.state.error}</HelpBlock> : null }
          <Button className="save-button" href="#" bsSize="small" onClick={this.handleSubmit}>Save</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
      </div>
    </div>
    );
  }

}
