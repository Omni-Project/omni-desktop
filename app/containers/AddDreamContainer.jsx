import React from 'react'
import { connect } from 'react-redux'
import AddDreamForm from '../components/AddDreamForm'
import { receiveDreamEntry } from '../reducers/dreams'

export default connect(null,
  (dispatch) => {
    return {
      handleSubmit: function(state) {
        const { title, content, timeStart, timeEnd, dreamType, isPublic } = state

        dispatch(receiveDreamEntry(title, content, timeStart, timeEnd, dreamType, isPublic))
      }
    }
  }
)(AddDreamForm)
