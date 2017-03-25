import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import SpriteScene from './SpriteScene'

export default connect(
  (state) => {
    return {
      dreams: state.dreams.list
    }
  }, null)(({dreams}) => {
console.log(dreams)

  const cols = dreams && dreams.map(dream => (<Col md={5} style={{height: "300px"}} key={dream.id}>
            <SpriteScene dream={dream} />
          </Col>))
  return (

      <Grid className="dream-grid">
        <Row className="show-grid">
          { cols }
        </Row>
    </Grid>

  )
})
