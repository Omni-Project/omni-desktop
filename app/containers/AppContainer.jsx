import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function(props) {

  return (
    <div style={{display: 'flex'}}>
      <Navbar />
      <Sidebar />
      <div id="main-content">
      { props.children && React.cloneElement(props.children, props) }
      </div>
    </div>
  )
}
