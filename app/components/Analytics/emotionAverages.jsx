import React from 'react'
import { Col } from 'react-bootstrap'
import { VictoryChart, VictoryBar, VictoryTooltip, VictoryAxis } from 'victory';

// Colors
const gridLinesColor = "#242424";
const axisColor = "rgb(137, 137, 137)";
const lineColor = "#a974d5";
const grey900 = "#212121";
// Typography
const sansSerif = "'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;
// Layout
const padding = 5;
const baseProps = {
  width: 350,
  height: 200,
  padding: {left: 65, right: 65, top: 20, bottom: 20}
};
// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: axisColor
};
const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);
// Strokes
const strokeDasharray = "0, 0";
const strokeLinecap = "round";
const strokeLinejoin = "round";
// Put it all together...
const theme = {
  axis: Object.assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: "none",
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding: 2,
        stroke: "transparent"
      }),
      grid: {
        fill: "transparent",
        stroke: "none",
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: "none",
        strokeWidth: 0,
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
        padding: 2,
        stroke: "transparent",
        strokeWidth: 0,
        width: 10
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  chart: baseProps,
};


export default function(props) {
  //sum up total vals for emotions
  const emotionTotals = props.dreams.reduce((emotionAvgs, dream) => {
    emotionAvgs.Anger += dream.angerVal
    emotionAvgs.Surprise += dream.surpriseVal
    emotionAvgs.Joy += dream.joyVal
    emotionAvgs.Fear += dream.fearVal
    emotionAvgs.Sadness += dream.sadnessVal
    return emotionAvgs
  }, {Surprise: 0, Anger: 0, Fear: 0, Sadness: 0, Joy: 0})
  //transform data into array that VictoryPie can reference, getting the average for each emotion
  const data = Object.keys(emotionTotals).map(emotion => {
    return {emotion, avg: Math.round(emotionTotals[emotion]/props.dreams.length), label: Math.round(emotionTotals[emotion]/props.dreams.length) }
  })

  return (
     <Col xs={12} md={12} className="analytics-box" style={{height: '350px'}}>
      <h3>Emotion Averages For All Dreams</h3>
        { data.length &&
          <VictoryChart
          animate={{ duration: 2000 }}
          theme={theme}
          domainPadding={10}
          >
          <VictoryAxis dependentAxis
            orientation="left"/>
            <VictoryBar
              horizontal={true}
              data={data}
              x="emotion"
              y={(datum) => datum.avg}
              labelComponent={<VictoryTooltip style={{fill: '#a974d5'}} flyoutStyle={{fill: "#242424", stroke: '#C0B4CA'}}/>}
            />
        </VictoryChart>
      }
    </Col>
  )
}

