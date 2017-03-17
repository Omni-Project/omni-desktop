import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material="color: red" position={[0, 0, -5]}/>
      </Scene>
    );
  }
}
