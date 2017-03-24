import { TagCloud } from "react-tagcloud";
import WordCloud from 'react-d3-cloud';
import { Col } from 'react-bootstrap'
import React from 'react'

const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MongoDB", count: 18 },
  { value: "CSS3", count: 20 },
  { value: "hello", count: 38 },
  { value: "goodbye", count: 30 },
  { value: "LOL", count: 28 },
  { value: "cool.js", count: 25 },
  { value: "lala", count: 33 },
  { value: "OK", count: 18 },
  { value: "hhah", count: 20 }
];

const data2 = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 105;


export default function() {

  return (
    <Col xs={12} md={6} className="analytics-box" >
      <TagCloud minSize={12}
                maxSize={35}
                tags={data}
                onClick={tag => alert(`'${tag.value}' was selected!`)} />


      <WordCloud
        data={data2}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
      />
    </Col>
  )
}
