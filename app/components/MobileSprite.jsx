import 'aframe';
import React from 'react';
import SingleSprite from './SingleSprite'
import Environment from './Environment'
import {connect} from 'react-redux'


export class MobileSprite extends React.Component {
  render () {
    const dream = this.props.dream
    return (
      <div style={{height: "500px"}}>
        <div id="embedded">
          <Environment background={dream.background}>
            <SingleSprite dream={dream} randomizePosition={false}/>
          </Environment>
        </div>
      </div>
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
