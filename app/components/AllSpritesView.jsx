import React from 'react'
import {connect} from 'react-redux'
import SingleDream from './SingleDream'
import SingleSprite from './SingleSprite'
import Environment from './Environment'

export default connect(
  (state) => {
    return {
      publicDreams: state.dreams.publicDreams
    }
  }
)(class extends React.Component {
  constructor() {
    super();
    this.state = {selectedDream: null}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (dream) {
    console.log(dream)
    this.setState({selectedDream: dream})
  }

  render() {
    const publicDreams = this.props.publicDreams
    const sprites = publicDreams && publicDreams.map(dream => (

    <SingleSprite
      dream={dream}
      key={dream.id}
      randomizePosition={true}
      handleClick={this.handleClick}
    />

  ))

  return (
 <span>
    <Environment background="pos-2">
      { sprites }
    </Environment>

    {
      this.state.selectedDream && <SingleDream selectedDream={this.state.selectedDream} />
    }
     </span>
  )
  }
})
