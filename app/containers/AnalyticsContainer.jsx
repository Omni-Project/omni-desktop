import React from 'react'
import { connect } from 'react-redux'

import WeekHoursSleptChart from '../components/Analytics/weekHoursSlept';

export default connect(
  (state) => {
    return {
      weekDreams: state.analytics.week
    }
  }
)(function(props) {
  return (
    <div>
      <h1>Analytics</h1>

      {props && <WeekHoursSleptChart weekDreams={props.weekDreams} />}

    </div>
  )
})



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
const gridLinesColor = "#242424";
const axisColor = "rgb(137, 137, 137)";
const lineColor = "#a974d5";
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
  fill: axisColor
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
        stroke: gridLinesColor,
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
        fill: axisColor,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: lineColor,
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
        stroke: lineColor
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: lineColor
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: lineColor,
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
        stroke: lineColor,
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
        stroke: gridLinesColor,
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
        fill: lineColor,
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
        stroke: lineColor,
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

