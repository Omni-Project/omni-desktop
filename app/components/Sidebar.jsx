import React from 'react';
import { Link } from 'react-router'

const activeStyle = {backgroundColor:'rgba(172, 146, 193, 0.2)', color: '#fff', borderRadius: '3px'}

export default function Sidebar () {

return (
    <div className="side-nav">
        <div className="side-nav-overlay">
        <ul>
            <li>
                <Link to="/dreams" activeStyle={activeStyle}><img src="/images/crescent-moon-phase.png" style={{paddingBottom: '2px'}} /> Dreams</Link>
            </li>

            <li>
                <Link to="/analytics"><img src="/images/statistical-chart.png" style={{paddingBottom: '3px'}} /> Analytics</Link>
            </li>

            <li>
                <Link to="/public"><img src="/images/web-hosting.png" style={{paddingBottom: '3px'}}/> Public</Link>
            </li>

        </ul>
        </div>
    </div>
)

}
