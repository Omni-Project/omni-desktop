import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col, bootstrapUtils } from 'react-bootstrap'
import SpriteScene from './SpriteScene'

export default (props) => {
  const dream = props.selectedDream
  const date = new Date(dream.date)
  const locale = "en-us"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return (
      <Grid className="dream-grid">
        <Row className="show-grid">
          <Col md={12} style={{height: "500px"}}>
            <SpriteScene dream={dream} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12} style={{height: "500px"}}>
            <SpriteScene dream={dream} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={8} className="single-dream">
            <h5>{date.toLocaleString(locale, options)}</h5>
            <h3>{dream.title}</h3>
            <p>{dream.content}</p>
            <p className="dream-type">{dream.dreamType}</p>
          </Col>
          <Col xs={12} md={3} className="single-dream">
            <h4>Dream Type</h4>
            <p>{dream.dreamType}</p>
            <h4>Keywords</h4>
            <ul>
              {dream.keywords && dream.keywords.map(word => <li key={word}>{word}</li>)}
            </ul>
            <h4>Dominant Persona</h4>
            <p>{dream.persona}</p>
          </Col>
        </Row>
    </Grid>
  )
}
