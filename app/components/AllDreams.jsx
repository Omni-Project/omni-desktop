import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import DreamPreview from './DreamPreview'


export default function(props) {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1>Dreams</h1>

        <Link to="/dreams/add" className="add-link">Add a Dream</Link>

      </div>
    <Grid className="dream-grid">
    <Row className="show-grid">
      {props.dreams && props.dreams.map(dream => <DreamPreview dream={dream} key={dream.id}/>)}
    </Row>

  </Grid>
  </div>
  )
}
