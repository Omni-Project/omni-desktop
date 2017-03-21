import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

export default function() {
  return (
    <div>
    <h1>Dreams</h1>
    <Link to="/dreams/add">Add a Dream</Link>
    <Grid className="dream-grid">
    <Row className="show-grid">
      <Col xs={12} md={6} className="dream-box" >
        <p style={{color: '#9c9a9a'}}>March 20, 2017</p>
        <h3>Angst on Toast</h3>
        <p>I had a dream about this and blah blah blah ..</p>
      </Col>

      <Col xs={12} md={6} className="dream-box" >
        <p style={{color: '#9c9a9a'}}>March 20, 2017</p>
        <h3>Angst on Toast</h3>
        <p>I had a dream about this and blah blah blah ..</p>
      </Col>

    </Row>

  </Grid>
  </div>
  )
}
