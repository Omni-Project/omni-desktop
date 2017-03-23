import React from 'react'
import { Col } from 'react-bootstrap'
import CountTo from 'react-count-to';

export default function({ user }) {
  return (
    <Col xs={12} md={6} className="analytics-box" >
        <h3>Average Sleep Per Night</h3>



        <div id="analytics-circle">
          <h1><CountTo to={user.averageSleep} speed={2500} digits={2} /></h1>
        </div>
    </Col>
  )
}
