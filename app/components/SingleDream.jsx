import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import SpriteScene from './SpriteScene'

export default ({ selectedDream, privateView }) => {

  const date = new Date(selectedDream.date)
  const locale = "en-us"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <div>
      <Grid className="dream-grid">

        {
          privateView &&
          <Row className="show-grid">
            <Col md={12} style={{height: "500px"}}>
              {selectedDream.id && <SpriteScene dream={selectedDream} />}
            </Col>
          </Row>
        }

        <Row className="show-grid">
          {/*DREAM TITLE AND CONTENT*/}
          <Col xs={12} md={8} className="single-dream">
            <h5>{date.toLocaleString(locale, options)}</h5>
            <h3>{selectedDream.title}</h3>
            <p>{selectedDream.content}</p>
            <p className="dream-type">{selectedDream.dreamType}</p>

            {/*UPDATE AND DELETE LINKS*/}
            <a href="#" onClick={(evt) => props.handleEdit(evt)}>Edit</a> |
            <a href="#" onClick={(evt) => props.handleDreamDelete(evt, dream.id)}>Delete</a>
          </Col>

          {/*DREAM KEYWORDS*/}
          <Col xs={12} md={3} className="single-dream">
            <h4>Dream Type</h4>
            <p>{selectedDream.dreamType}</p>
            <h4>Keywords</h4>
            <ul>
              {selectedDream.keywords && selectedDream.keywords.map(word => <li key={word}>{word}</li>)}
            </ul>
            <h4>Dominant Persona</h4>
            <p>{selectedDream.persona}</p>
          </Col>
        </Row>
    </Grid>
  </div>
  )
}
