import React from 'react';
import { Link } from 'react-router'
import { Grid, Row} from 'react-bootstrap'
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
      {props.dreams.length ? props.dreams.sort((a,b) => new Date(b.date) - new Date(a.date)).map(dream => <DreamPreview dream={dream} key={dream.id}/>) : <h3 style={{color: '#c8b7d5'}}>Looks like you don't have any dreams!</h3>}
    </Row>

  </Grid>
  </div>
  )
}
