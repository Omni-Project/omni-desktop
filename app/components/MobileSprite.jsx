import 'aframe';
import React from 'react';
import SingleSprite from './SingleSprite'
import Environment from './Environment'
import {connect} from 'react-redux'


export class MobileSprite extends React.Component {
  render () {
    const dream = this.props.dream
    return (

          <Environment background={dream.background}>
            <SingleSprite dream={dream} displacement={[0,0,0]}/>
          </Environment>

    );
  }
}

export default connect (
  state => {
    return {
      dream: state.dreams.selectedDream
    }
  }
)(MobileSprite)
