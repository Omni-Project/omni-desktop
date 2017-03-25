import React from 'react'
import {connect} from 'react-redux'
import SingleSprite from './SingleSprite'
import Environment from './Environment'

export default connect(
  (state) => {
    return {
      dreams: state.dreams.list
    }
  }
)(({ dreams }) => {

  const sprites = dreams && dreams.map(dream => (
    <SingleSprite dream={dream} key={dream.id} />
  ))


  return (
    <Environment background="pos-1">
      { sprites }
    </Environment>
  )
})
