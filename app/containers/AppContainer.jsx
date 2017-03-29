import React from 'react';
import {connect} from 'react-redux'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import {logout} from '../reducers/auth'


export default connect(
  (state) => {
    return {
      user: state.auth
    }
  },
  (dispatch) => {
    return {
      handleLogout: () => {
        dispatch(logout())

      }
    }
  }
)(function(props) {
  return (
    <div style={{display: 'flex'}}>

      <div>
        <Navbar user={props.user} handleLogout={props.handleLogout}/>
        <Sidebar user={props.user} />
        <div id="main-content">
        { props.children && React.cloneElement(props.children, props) }
        </div>
      </div>

    </div>
  )
})



