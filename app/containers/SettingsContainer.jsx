import React, {Component} from 'react';
import { Link } from 'react-router'
import {connect} from 'react-redux'
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import UserEmail from '../components/Settings/UserEmail'
import UserName from '../components/Settings/UserName'
import UserPassword from '../components/Settings/UserPassword'
import {updateUser} from '../reducers/auth'


export class Settings extends Component {
   constructor (props) {
    super(props)
    this.state = {
        editName: false,
        editEmail: false,
        editPass: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.onSave = this.onSave.bind(this)
   }
   handleClick(evt){
    //toggles between edit mode
    evt.preventDefault()
    this.setState({[evt.target.name]: !this.state[evt.target.name]})
   }

   onSave(formType, field, newValue, oldValue){
    const user = this.props.user
    this.props.update(field, user, newValue, oldValue)
    //dont close drop down form if editing password - to see success/error msg
    if(!oldValue) this.setState({[formType]: !this.state[formType]})
   }

  render(){
    const user = this.props.user
    return (
        <div style={{width: 500}}>
        <h1>Account Settings</h1>
            <div className="settings-container">
            {/*NAME*/}
                <div>
                    <label className="settings-labels"><h4>Name: </h4></label>
                    <div className="settings-userinfo">
                        {this.state.editName? <UserName user={user} onSave={this.onSave}/> : user.name}
                    <Button className="edit-button" name="editName" href="#" bsSize="xsmall" onClick={this.handleClick}>{this.state.editName? "Cancel" : "Edit"}</Button>
                    </div>
                </div>
            {/*EMAIL*/}
                <div>
                    <label className="settings-labels"><h4>Email: </h4></label>
                    <div className="settings-userinfo">
                        {this.state.editEmail? <UserEmail user={user} onSave={this.onSave}/> : user.email}
                    <Button className="edit-button" name="editEmail" href="#" bsSize="xsmall" onClick={this.handleClick}>{this.state.editEmail? "Cancel" : "Edit"}</Button>
                    </div>
                </div>
             {/*PASSWORD*/}
                <div>
                    <label className="settings-labels"><h4>Password: </h4></label>
                    <div className="settings-userinfo">
                        {this.state.editPass? <UserPassword user={user} onSave={this.onSave} serverError={this.props.serverError}/> : "********"}
                    <Button className="edit-button" name="editPass" href="#" bsSize="xsmall" onClick={this.handleClick}>{this.state.editPass? "Close" : "Edit"}</Button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect (
    state =>{
        return {
            user: state.auth,
            serverError: state.server
        }
    },
    (dispatch) => {
        return {
            update: (field, user, newValue, oldValue) => {
                dispatch(updateUser(field, user, newValue, oldValue))
            }
        }
    }
)(Settings)
