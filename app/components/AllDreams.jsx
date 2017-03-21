import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import DreamPreview from './DreamPreview'


export default function(props) {
  return (
    <div>
    <h1>Dreams</h1>
    <Link to="/dreams/add">Add a Dream</Link>
    <Grid className="dream-grid">
    <Row className="show-grid">
      {props.dreams && props.dreams.map(dream => <DreamPreview dream={dream} key={dream.id}/>)}
    </Row>

  </Grid>
  </div>
  )
}
