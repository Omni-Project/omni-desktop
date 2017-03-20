import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Sky from './Sky'

export default class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Sky />

        <a-assets>
          <a-asset-item id="surprise" src="surprise.obj"></a-asset-item>
          <a-asset-item id="joy" src="Joy.obj"></a-asset-item>
          <a-asset-item id="sadness" src="sadness.obj"></a-asset-item>
          <a-asset-item id="anger" src="anger1.obj"></a-asset-item>
          <a-asset-item id="fear" src="Fear.obj"></a-asset-item>
          <a-mixin id="surpriseColor" material="color: #ff7afa"></a-mixin>
          <a-mixin id="joyColor" material="color: #fff6a5"></a-mixin>
          <a-mixin id="sadnessColor" material="color: #a5dcff"></a-mixin>
          <a-mixin id="fearColor" material="color: black"></a-mixin>
          <a-mixin id="angerColor" material="color: #ff7a7a"></a-mixin>
        </a-assets>

        <a-obj-model src="#surprise" position="0 -2 -7" mixin="surpriseColor" scale="0 0 0">
         <a-animation attribute="scale" to='2 2 2' easing="ease-in-out" direction="alternate" dur="2000"
      repeat="indefinite"></a-animation>
        </a-obj-model>

         <a-obj-model src="#fear" position="0 -0.5 -7" scale="0.5 0.5 0.5" mixin="fearColor">
              <a-animation attribute="position" from="0 -0.5 -7" to="0 -1.2 -7" easing="ease-in-out" direction="alternate" dur="1500"
          repeat="indefinite"></a-animation>

        </a-obj-model>

        <a-obj-model src="#joy" position="0 -1 -7" mixin="joyColor">
          <a-animation attribute="rotation" to='360 0 0' easing="ease-in-out" direction="alternate" dur="5000"
      repeat="indefinite"></a-animation>
        </a-obj-model>

        <a-obj-model src="#anger" position="0 -3 -7" mixin="angerColor" />

        <a-obj-model src="#sadness" position="0 -6 -7" scale="0.5 0.5 0.5" mixin="sadnessColor"/>

        <a-entity light ="color:#AFA; intensity: 5" position="0 -2 -7" ></a-entity>

        <a-entity light="type: ambient; color: #BBB"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0" position="-0.5 1 1"></a-entity>


       {/*
       // EI: let's get in the habit of not having commented-out code merged into master. look out for it (and console.logs!) when you review each other's PRs.
       <Entity

          geometry='primitive: box'
          material={{color: this.state.color, opacity: 0.6}}
          position='0 -0.5 -3'
          rotation="0 45 45"
          onClick={this.changeColor.bind(this)}>
          <a-animation attribute="position" to='0 0 -3' easing="ease-in-out" direction="alternate" dur="2000"
      repeat="indefinite"></a-animation>
      <a-animation attribute="rotation" to='360 0 0' easing="ease-in-out" direction="alternate" dur="5000"
      repeat="indefinite"></a-animation>
      <a-animation attribute="color" to='blue' easing="ease-in-out" direction="alternate" dur="5000"
      repeat="indefinite"></a-animation>

        </Entity> */}
      </Scene>
    );
  }
}
