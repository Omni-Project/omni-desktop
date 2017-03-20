import React from 'react';

export default function Navbar() {

  return (
      <nav className ="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className ="navbar-header">
              <button type="button" className ="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className ="sr-only">Toggle navigation</span>
                  <span className ="icon-bar"></span>
                  <span className ="icon-bar"></span>
                  <span className ="icon-bar"></span>
              </button>
              <a className ="navbar-brand" href="/">DreamScape</a>
          </div>

          <div className ="collapse navbar-collapse navbar-ex1-collapse">
          <ul className ="nav navbar-right top-nav">
              <li className ="dropdown">
                  <a href="#" className ="dropdown-toggle" data-toggle="dropdown">FIRST NAME <b className ="caret"></b></a>
                  <ul className ="dropdown-menu">
                      <li>
                          <a href="#">Settings</a>
                      </li>
                      <li className ="divider"></li>
                      <li>
                          <p className="logout">Logout</p>
                      </li>
                  </ul>
              </li>
          </ul>
          </div>

      </nav>


    )

}
