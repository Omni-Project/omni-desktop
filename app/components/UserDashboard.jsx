import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to your dashboard!</h1>
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className='hi-dashboard'>
        Hi! Great to see you. Now that you're signed in, just roll over the options on the left to update any of your information.
        </div>
      </div>
    );

    }

}