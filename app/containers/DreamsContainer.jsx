import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AllDreams from '../components/AllDreams'

export default connect()(function(props) {

    return (
      <div>
        <h1>Dreams</h1>
        <button><Link to="/add">Add a Dream</Link></button>
        <AllDreams />
      </div>
      )
  }
)
