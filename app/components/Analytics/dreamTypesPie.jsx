import React from 'react'
import { Col } from 'react-bootstrap'
import { VictoryChart, VictoryPie } from 'victory';

// Typography
const sansSerif = "'Quicksand', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

// Layout
const padding = 0;

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 0,
  fill: '#FFFFFF'
};

const centeredLabelStyles = Object.assign({ textAnchor: "middle", verticalAnchor: "middle"}, baseLabelStyles);

export default function(props) {
  //get total count of dreams
  const total = props.dreams.length
  //calculate percentage of each dream type on the label
  const getPercent = (count) => {
    return Math.round((count/total)*100)
  }
  const dreams = props.dreams.reduce((obj, dream) => {
    if(!obj[dream.dreamType]) obj[dream.dreamType] = 0
    obj[dream.dreamType] = obj[dream.dreamType]+1
    return obj
  }, {})

  //transform data into array that VictoryPie can reference
  const data = Object.keys(dreams).map(type => {
    return {dreamType: type, count: dreams[type]}
  })

  return (
    <Col xs={12} md={6} className="analytics-box" >
      <h3>% of Dream Types</h3>
        <VictoryPie
          colorScale={['#a974d5','#c989ff','#785199','#bd99db','#6b567c']}
          style={{
            labels: centeredLabelStyles
          }}
          labelRadius="100"
          animate={{duration: 2000}}
          labels={(datum) => `${datum.dreamType}\n${getPercent(datum.count)}%`}
          data={data}
          width={350} height={350}
          x="dreamType"
          y={(datum) => datum.count}
        />
    </Col>
  )
}

