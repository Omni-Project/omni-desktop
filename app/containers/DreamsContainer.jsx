import React from 'react'
import { connect } from 'react-redux'
import { receiveDreamEntry, updateDream, deleteDream } from '../reducers/dreams'
import {browserHistory} from 'react-router'


export default connect(
  (state) => {
    return {
      dreams: state.dreams,
      user: state.auth
    }
  },
  (dispatch, ownProps) => {
    return {
      handleSubmit: function(state) {
        const { title, content, timeStart, timeEnd, dreamType, isPublic, date, dreamId } = state
        dispatch(receiveDreamEntry(title, content, timeStart, timeEnd, dreamType, isPublic, date, ownProps.userId, dreamId))
        browserHistory.push('/dreams/all')
      },
      handleDreamDelete: function(evt, dreamId) {
        evt.preventDefault()
        dispatch(deleteDream(dreamId, ownProps.userId))
      },
      handleEdit: function(evt) {
        evt.preventDefault()
        browserHistory.push('/dreams/edit')
      }
    }
  }
)(function DreamsContainer(props) {
  const propsToPass = {
    handleSubmit: props.handleSubmit,
    dreams: props.dreams.list,
    selectedDream: props.dreams.selectedDream,
    userId: props.user.id,
    handleDreamDelete: props.handleDreamDelete,
    handleEdit: props.handleEdit
  }

  return (
    <div>
      { props.children && React.cloneElement(props.children, propsToPass) }
    </div>
    )
})
