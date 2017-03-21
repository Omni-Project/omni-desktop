import React from 'react'
import { connect } from 'react-redux'
import { receiveDreamEntry } from '../reducers/dreams'

export default connect(null,
  (dispatch) => {
    return {
      handleSubmit: function(state) {
        const { title, content, timeStart, timeEnd, dreamType, isPublic, date } = state

        dispatch(receiveDreamEntry(title, content, timeStart, timeEnd, dreamType, isPublic, date))
      }
    }
  }
)(function DreamsContainer(props) {
  const propsToPass = {
    handleSubmit: props.handleSubmit
  }

  return (
    <div>
      { props.children && React.cloneElement(props.children, propsToPass) }
    </div>
    )
})
