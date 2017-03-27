import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'

import WeekHoursSleptChart from '../components/Analytics/weekHoursSlept';
import AverageHoursSlept from '../components/Analytics/averageHoursSlept';
import DreamTypesPie from '../components/Analytics/dreamTypesPie'

export default connect(
  (state) => {
    return {
      weekDreams: state.analytics.week,
      user: state.analytics.user,
      dreams: state.dreams.list
    }
  }
)(function(props) {
  return (
    <div>
      <h1>Analytics</h1>

      <Grid className="dream-grid">
        <Row className="show-grid">
          <WeekHoursSleptChart weekDreams={props.weekDreams} />
          <AverageHoursSlept user={props.user} />
          <DreamTypesPie dreams={props.dreams}/>
        </Row>
      </Grid>
    </div>
  )
})
