import React from 'react'
import { connect } from 'react-redux'
import AddDreamForm from '../components/AddDreamForm'
import { updateDreamAsync } from '../reducers/dreams'

export default connect (
  (state) => {
    return {
      user: state.auth,
      dreamToUpdate: state.dreams.selectedDream
    }
  },
  (dispatch) => {
    return {
      handleSubmit(dream){
        dispatch(updateDreamAsync(dream, props.user.id))
      }
    }
  }
)(AddDreamForm)
