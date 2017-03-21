import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col, Panel } from 'react-bootstrap'


const SingleDream = (props) => {
  console.log('PROPS',props)
  const dream = props.dream
  const date = new Date(2017,3,21) //CHANGE TO dream.date after we merge the updated model.
  const locale = "en-us"
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const footer = "Some footer"

  return (
    <div>
    <Grid className="dream-grid">
    <Row className="show-grid">
      <Col xs={12} md={8} className="dream-box" >
      {dream &&
        <Panel
        header={<h3>{date.toLocaleString(locale, options)} | {dream.title}</h3>}
        footer={footer}>
          {dream.content}
        </Panel>
      }
      </Col>
    </Row>
  </Grid>
  </div>
  )
}

export default connect ((state) => {
  return {
    dream: state.dreams.selectedDream
  }
})(SingleDream)
