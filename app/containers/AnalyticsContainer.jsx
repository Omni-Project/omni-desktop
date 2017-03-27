import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'

import WordCloud from '../components/Analytics/wordCloud';
import WeekHoursSleptChart from '../components/Analytics/weekHoursSlept';
import AverageHoursSlept from '../components/Analytics/averageHoursSlept';
import SleepDebt from '../components/Analytics/sleepDebt';
import EmotionAverages from '../components/Analytics/emotionAverages'


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
          <SleepDebt user={props.user} />
          <EmotionAverages dreams={props.dreams} />
          {
            props.user && props.user.dreams &&
            <WordCloud dreams={props.user.dreams} />

          }
        </Row>
      </Grid>
    </div>
  )
})
