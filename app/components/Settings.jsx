import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'

// all forms with NAME/PW and the placeholder with a button called edit
// when edit is clicked, placeholder becomes a text field
//         old pw, new pw, email, photos(later)--> type in old and new pw
//         change pw route
//         make sure two passwords are correct
//         then set new pw


export default function(props) {

  return (
    <div style={{width: 500}}>
    <h1>Account Settings</h1>
        <div className="settings-container">  
		<form method="post">

                <div>
                    <label className="settings-labels"><h4>Name: </h4></label>
                    <div className="settings-userinfo">
                        {props.user.name}
                    <Button className="edit-button" href="#" bsSize="xsmall">edit</Button>
                    </div>
                </div>

                <div>
                    <label className="settings-labels"><h4>Password: </h4></label>
                    <div className="settings-userinfo">
                        **********
                    <Button className="edit-button" href="#" bsSize="xsmall">edit</Button>
                    </div>
                </div>

                <div>
                    <label className="settings-labels"><h4>Email: </h4></label>
                    <div className="settings-userinfo">
                        {props.user.email}
                    <Button className="edit-button" href="#" bsSize="xsmall">edit</Button>
                    </div>
                </div>
		</form>
        </div>
    </div>
  )
}