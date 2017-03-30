import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {
  const user = props.user
  return (
      <nav className ="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className ="navbar-header">
              <button type="button" className ="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className ="sr-only">Toggle navigation</span>
                  <span className ="icon-bar"></span>
                  <span className ="icon-bar"></span>
                  <span className ="icon-bar"></span>
              </button>
              <a className ="navbar-brand" href="/">Omni</a>
          </div>

          <div className ="collapse navbar-collapse navbar-ex1-collapse">
            <ul className ="nav navbar-right top-nav">
                <li className ="dropdown">
                    <Link to={'#'} className ="dropdown-toggle" data-toggle="dropdown">Welcome back, {user.name || user.email}<b className ="caret"></b></Link>
                    <ul className ="dropdown-menu">
                        <li>
                            <Link to={'/settings'}>Settings</Link>
                        </li>
                        <li className ="divider"></li>
                        <li>
                            <Link to={'#'} onClick={props.handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
      </nav>
    )
}
