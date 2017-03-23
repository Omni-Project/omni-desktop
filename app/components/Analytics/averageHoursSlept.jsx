import React from 'react'
import { Col } from 'react-bootstrap'

export default function({ user }) {
  return (
    <Col xs={12} md={6} className="analytics-box" >
        <h3>Average Sleep Per Night</h3>
        <div id="analytics-circle">
          <h1>{user.averageSleep}</h1>
        </div>
    </Col>
  )
}
