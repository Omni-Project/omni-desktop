import React from 'react'
import { Col } from 'react-bootstrap'
import CountTo from 'react-count-to';

export default function({ user }) {

  return (
    <Col xs={12} md={6} className="analytics-box" >
        <h3>Sleep Debt</h3>
        <div id="analytics-circle">
          <h1><CountTo to={user && user.sleepDebt} speed={2500} digits={2} /></h1>
        </div>
        <br />
        <p style={{color: '#9c9c9c', fontStyle: 'italic'}}>Based on recommended 8 hours of sleep per night</p>
    </Col>
  )
}
