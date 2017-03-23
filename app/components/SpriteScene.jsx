import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import Sky from './Sky'

export default class VRScene extends React.Component {
  render () {
    return (
      <a-scene>
        <Sky />

        <a-assets>
          <a-asset-item id="surprise" src="surprise.obj"></a-asset-item>
          <a-asset-item id="joy" src="joy.obj"></a-asset-item>
          <a-asset-item id="sadness" src="sadness.obj"></a-asset-item>
          <a-asset-item id="anger" src="anger.obj"></a-asset-item>
          <a-asset-item id="fear" src="fear.obj"></a-asset-item>
        </a-assets>

        {/** SURPRISE **/}
        <a-obj-model src="#surprise" material="color: white" position="0 -2 -7" scale="0 0 0">
          <a-animation
            attribute="scale"
            to='2 2 2'
            easing="ease-in-out"
            direction="alternate"
            dur="2000"
            repeat="indefinite" />
          <a-animation
            attribute="color"
            from="white"
            to="red"
            dur="500"
            easing="ease-in"
            direction="alternate"
            repeat="indefinite"
          />
        </a-obj-model>


        {/** FEAR **/}
        <a-obj-model src="#fear" position="0 -0.5 -7" scale="0.5 0.5 0.5" material="color: black">
          <a-animation
            attribute="position"
            from="0 -0.5 -7"
            to="0 -1.0 -7"
            easing="ease-back"
            direction="alternate"
            dur="1500"
            fill="forwards"
            repeat="indefinite" />
        </a-obj-model>

        {/** JOY **/}
        <a-obj-model src="#joy" position="0 -1 -7" material="color: #fff6a5" scale="0.6 0.6 0.6">
          <a-animation
            attribute="rotation"
            to='360 360 0'
            easing="ease"
            direction="alternate"
            dur="4000"
            repeat="indefinite" />

          <a-animation
            attribute="scale"
            to="1.1 1.1 1.1"
            direction="alternate"
            dur="4000"
            repeat="indefinite" />
        </a-obj-model>

        {/** ANGER **/}
        <a-obj-model src="#anger" position="0 -3 -7" scale="0.8 0.8 0.8" material="color: #ff7a7a">
          <a-animation
            attribute="rotation"
            to='0 0 -45'
            dur="1000"
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        <a-obj-model src="#anger" rotation="0 180 0" position="0 -3 -7" scale="0.8 0.8 0.8" material="color: #ff7a7a">
          <a-animation
            attribute="rotation"
            to='0 180 -45'
            dur="1000"
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

        {/** SADNESS **/}
        <a-obj-model src="#sadness" position="0 -3 -7"  material="color: #a5dcff">
          <a-animation
            attribute="rotation"
            to='0 360 0'
            dur="5000"
            fill="forwards"
            repeat="indefinite" />
        </a-obj-model>

        {/** LIGHTS **/}
        <a-entity light ="color:#AFA; intensity: 5" position="0 -2 -7" ></a-entity>
        <a-entity light="type: ambient; color: #BBB"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0" position="-0.5 1 1"></a-entity>
      </a-scene>
    );
  }
}
