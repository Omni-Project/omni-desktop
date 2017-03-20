import React from 'react';
import { Link } from 'react-router'


export default function Sidebar () {

return (
    <div className="side-nav">
        <ul>
            <li>
                <span data-toggle="collapse" data-target="#dreams">
                    <Link to="/dreams">Dreams</Link>
                </span>
                <ul id="dreams" className="collapse">View past dreams</ul>
            </li>

            <li>
                <span data-toggle="collapse" data-target="#analytics">
                    <Link to="">Analytics</Link>
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
)

}
