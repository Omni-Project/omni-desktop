import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

export default (props) => {
  const dream = props.dream
  return (
    <Link to={`/api/dreams/${dream.id}`}>
      <Col xs={12} md={6} className="dream-box" >
          <h5>{dream.date}</h5>
          <h3>{dream.title}</h3>
          <p>{dream.content.slice(0,140)}...</p>
          <p className="dream-type">{dream.dreamType}</p>
      </Col>
    </Link>
  )
}
