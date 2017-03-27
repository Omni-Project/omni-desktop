import React from 'react'
import {connect} from 'react-redux'
import SingleSprite from './SingleSprite'
import Environment from './Environment'

export default connect(
  (state) => {
    return {
      publicDreams: state.dreams.publicDreams
    }
  }
)(({ publicDreams }) => {

  const sprites = publicDreams && publicDreams.map(dream => (
    <SingleSprite dream={dream} key={dream.id} randomizePosition={true} />
  ))

  return (
    <Environment background="pos-1">
      { sprites }
    </Environment>
  )
})
