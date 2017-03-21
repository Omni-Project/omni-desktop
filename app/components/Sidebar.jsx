import React from 'react';
import { Link } from 'react-router'

const activeStyle = {backgroundColor:'rgba(225, 225, 225, 0.2)', color: '#fff', borderRadius: '4px'}

export default function Sidebar () {

return (
    <div className="side-nav">
        <div className="side-nav-overlay">
        <ul>
            <li>
                <Link to="/dreams" activeStyle={activeStyle}>Dreams</Link>
            </li>

            <li>
                <span data-toggle="collapse" data-target="#analytics">
                    <Link to="/analytics">Analytics</Link>
                </span>
                <ul id="analytics" className="collapse">View different charts</ul>
            </li>

            <li>
                <span data-toggle="collapse" data-target="#sprites">
                    <Link to="">Dream Sprites</Link>
                </span>
                <ul id="sprites" className="collapse">View your sprites</ul>
            </li>

            <li>
                <Link to="">Calendar</Link>
            </li>

            <li>
                <span data-toggle="collapse" data-target="#search">
                    <Link to="">Tags</Link>
                </span>

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
    </div>
)

}
