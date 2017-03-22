import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { VictoryLine, VictoryChart, Curve, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Analytics</h1>

         <Grid className="dream-grid">
          <Row className="show-grid">
            <Col sm={12} md={6} className="analytics-box" >
              <h3>Hours Slept This Week</h3>
              <VictoryChart
                animate={{ duration: 2000 }}
                theme={theme}
                domainPadding={20}
              >

                <VictoryLine
                  data={[
                    {day: "Sun", hours: 8},
                    {day: "Mon", hours: 7},
                    {day: "Tues", hours: 6},
                    {day: "Wed", hours: 8},
                    {day: "Thurs", hours: 5},
                    {day: "Fri", hours: 8},
                    {day: "Sat", hours: 7}
                  ]}
                  x="day"
                  y={(datum) => datum.hours}
                  labels={(datum) => datum.y}
                  interpolation="catmullRom"
                  domain={{x: [0, 7], y: [0, 9]}}
                />

                <VictoryAxis
                  tickCount={7}
                  tickFormat={['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={x => x}
                />
              </VictoryChart>
            </Col>

          </Row>
        </Grid>

      </div>
    )
  }
}




/*
  "material" theme (VictoryTheme.material)
  Try changing the theme. You could start with `colors` or `fontSize`.
*/

// Colors
const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900
];
const blueGrey50 = "#242424";
const axisColor = "#999";
const blueGrey700 = "#fff";
const grey900 = "#212121";
// Typography
const sansSerif = "'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

// Layout
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700
};

const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const theme = {
  area: Object.assign({
    style: {
      data: {
        fill: grey900
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: axisColor,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "transparent",
        stroke: blueGrey50,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: axisColor,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: Object.assign({}, baseLabelStyles, {
        fill: blueGrey700,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: blueGrey700,
        padding,
        stroke: "transparent",
        strokeWidth: 0,
        width: 5
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: Object.assign({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: Object.assign({}, centeredLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0
      })
    }
  }, baseProps),
  group: Object.assign({
    colorScale: colors
  }, baseProps),
  line: Object.assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: Object.assign({}, baseLabelStyles, {
        stroke: "transparent",
        strokeWidth: 0,
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: Object.assign({
    colorScale: colors,
    style: {
      data: {
        padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 20,
        stroke: "transparent",
        strokeWidth: 0
      })
    }
  }, baseProps),
  scatter: Object.assign({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: Object.assign({}, centeredLabelStyles, {
        stroke: "transparent"
      })
    }
  }, baseProps),
  stack: Object.assign({
    colorScale: colors
  }, baseProps),
  tooltip: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: blueGrey700,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    }
  }, baseProps),
  voronoi: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps)
};

