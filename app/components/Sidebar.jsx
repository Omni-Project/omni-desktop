import React from 'react';
import { Link } from 'react-router'

const activeStyle = {backgroundColor:'rgba(172, 146, 193, 0.2)', color: '#fff', borderRadius: '4px'}

export default function Sidebar () {

return (
    <div className="side-nav">
        <div className="side-nav-overlay">
        <ul>
            <li>
                <Link to="/dreams" activeStyle={activeStyle}>Dreams</Link>
            </li>

            <li>
                <Link to="/analytics">Analytics</Link>
            </li>

            <li>
                <Link to="/public">Public</Link>
            </li>

        </ul>
        </div>
    </div>
)

}
