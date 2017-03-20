import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router';
// EI: what are these 3 things doing here? vv
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import store from '../store'
import Slider from 'react-slick';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {};

  }

  render() {
    // EI: this is a lot of jsx; could you create sub-components?
    return (
 <div id="wrapper">

        <nav className ="navbar navbar-inverse navbar-fixed-top" role="navigation">

            <div className ="navbar-header">
                <button type="button" className ="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className ="sr-only">Toggle navigation</span>
                    <span className ="icon-bar"></span>
                    <span className ="icon-bar"></span>
                    <span className ="icon-bar"></span>
                </button>
                <a className ="navbar-brand" href="index.html">DreamScape</a>
            </div>

            <ul className ="nav navbar-right top-nav">

                <li className ="dropdown">
                    <a href="#" className ="dropdown-toggle" data-toggle="dropdown"><i className ="fa fa-user"></i> FIRST NAME <b className ="caret"></b></a>
                    <ul className ="dropdown-menu">
                        <li>
                            <a href="#"><i className ="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li className ="divider"></li>
                        <li>
                            <p className="logout">Logout</p>
                        </li>

                    </ul>
                </li>
            </ul>

            <div className ="collapse navbar-collapse navbar-ex1-collapse">
                <ul className ="nav navbar-nav side-nav">
                    {/* EI: could you make a NavItem component? and possibly an array of objects that you could map over to create the appropriate NavItem components? */}
                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#dreams"><i className ="fa fa-fw fa-book"></i> Dreams <i className ="fa fa-fw fa-caret-down"></i></a>
                        <ul id="dreams" className ="collapse"> View past Dreams </ul>
                    </li>

                     <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#ethnicity"><i className ="fa fa-users"></i> Analytics <i className ="fa fa-fw fa-caret-down"></i></a>
                        <ul id="ethnicity" className ="collapse">  View different charts here </ul>
                    </li>

                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#gender"><i className ="fa fa-venus-mars"></i> Dream Sprites <i className ="fa fa-fw fa-caret-down"></i></a>
                        <ul id="gender" className ="collapse"> View different sprites here </ul>
                    </li>

                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#income"><i className ="fa fa-money"></i> Calendar <i className ="fa fa-fw fa-caret-down"></i></a>
                        <ul id="income" className ="collapse"> View months, days, weeks here </ul>
                    </li>

                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#search"><i className ="fa fa-address-book-o"></i> Tags <i className ="fa fa-fw fa-caret-down"></i></a>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-7">
                              <div className="input-group">
                                <form id = "search" className ="collapse">
                                  <input className ="form-control" placeholder= "Search Tags" />
                                </form>
                              </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>

            <div id="page-wrapper" >
                <div className ="container-fluid">
                    <div className ="row">


                    </div>
                </div>
            </div>

      </div>
    )
  }
}
