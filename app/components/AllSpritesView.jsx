import React from 'react'
import {connect} from 'react-redux'
import SingleDream from './SingleDream'
import SingleSprite from './SingleSprite'
import Environment from './Environment'
import {generateDisplacement} from '../utils'

export default connect(
  (state) => {
    return {
      publicDreams: state.dreams.publicDreams.map(dream => {
        dream.displacement = generateDisplacement()
        return dream
      })
    }
  }
)(class extends React.Component {
  constructor() {
    super();
    this.state = {selectedDream: null}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (dream) {
    this.setState({selectedDream: dream})
  }

  render() {
    const publicDreams = this.props.publicDreams
    const sprites = publicDreams && publicDreams.map(dream => (

      <SingleSprite
        dream={dream}
        key={dream.id}
        displacement={dream.displacement}
        handleClick={this.handleClick}
      />
  ))

  return (
    <span>
      <Environment background="pos-2" publicView={true}>
        { sprites }
      </Environment>

    {
      this.state.selectedDream && <SingleDream selectedDream={this.state.selectedDream} />
    }
    </span>
  )
  }
})
