import 'aframe';
import React from 'react';
import SingleSprite from './SingleSprite'
import Environment from './Environment'

export default class VRScene extends React.Component {
  render () {
    const dream = this.props.dream

    return (

      <div id="embedded">
        <Environment background={dream.background}>
          <SingleSprite dream={dream} />
        </Environment>
      </div>
    );
  }
}


/*
LIGHT EXAMPLES

<a-entity light ="color:#AFA; intensity: 5" position="0 -2 -7" ></a-entity>
<a-entity light="type: ambient; color: #fff"></a-entity>
<a-entity light="type: directional; color: #FFF; intensity: 0" position="-0.5 1 1"></a-entity>*/
/*<a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
<a-entity light="color: white; type: ambient;"></a-entity>

<a-entity light="type: hemisphere; color: #33C; groundColor: #3C3; intensity: 2"></a-entity>*/
