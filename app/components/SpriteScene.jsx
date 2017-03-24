import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import Sky from './Sky'

const dummyData = {surpriseVal: 20}

export default class VRScene extends React.Component {
  constructor(props){
    super(props)
  }

  supriseAnimColor(eVal){
    const g = 100 - eVal;
    const b = 180 - eVal;
    console.log('G', g)
    console.log('B', b)
    return `rgb(255,${g},${b})`
  }

  metalness(eVal) {
    return (eVal/100).toFixed(2)
  }

  surpiseAnimScale(eVal) {
    return (eVal/20).toFixed(1)
  }

  renderScale(scale) {
    return `${scale} ${scale} ${scale}`
  }

  surpiseAnimDuration(eVal) {
    const val = eVal * 100
    const diff = 700 - val
    if (diff < 0) {
        return 300;
    } else {
        return (300 + diff);
    }
  }

  render () {
    const surpriseVal = dummyData.surpriseVal;
    return (
      <a-scene fog="type: linear; color: #AAA">
        <Sky />

        <a-assets>
          {/* MODELS */}
          <a-asset-item id="surprise" src="./objects/surprise.obj"></a-asset-item>
          <a-asset-item id="joy" src="./objects/joy.obj"></a-asset-item>
          <a-asset-item id="sadness" src="./objects/sadness.obj"></a-asset-item>
          <a-asset-item id="anger" src="./objects/anger.obj"></a-asset-item>
          <a-asset-item id="fear" src="./objects/fear.obj"></a-asset-item>

          {/*SKY/ENV*/}
          <img id="sky" src="/env-images/1.jpg" />

          {/** TEXTURES **/}
          <img id="plastic" src="/textures/plastic.jpg" />
          <img id="rust" src="/textures/yellow-009.jpg" />

          <a-asset-item id="floor-obj" src="./objects/floor.obj"></a-asset-item>
        </a-assets>

{/*<a-entity obj-model="obj: #sadness;" material="src: #plastic; metalness: 0.6" id="floor"></a-entity>*/}

        {/** SURPRISE **/}
        <a-obj-model src="#surprise" material={`src: #plastic; metalness: ${this.metalness(surpriseVal)}`} position="0 -2 -7" scale="0 0 0">
          {/*change size (pulsate)*/}
          <a-animation
            attribute="scale"
            to={this.renderScale(this.surpiseAnimScale(surpriseVal))}
            easing="ease-in-out"
            direction="alternate"
            dur="2000"
            repeat="indefinite" />
            {/*change color*/}
          <a-animation
            attribute="color"
            from="#ff7da7"
            to={this.supriseAnimColor(surpriseVal)}
            dur={this.surpiseAnimDuration(surpriseVal)}
            easing="ease-in"
            direction="alternate"
            repeat="indefinite"
          />
        </a-obj-model>

        {/** FEAR **/}
        <a-obj-model src="#fear" position="0 -0.5 -7" scale="0.5 0.5 0.5" material="color: black">
          {/*bobs up and down*/}
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
        <a-obj-model src="#joy" position="0 -1 -7" material="src: #rust; color: #696969; roughness: 0; metalness: 0.3" >
          {/*rotates*/}
          <a-animation
            attribute="rotation"
            to='360 360 0'
            easing="ease"
            direction="alternate"
            dur="4000"
            repeat="indefinite" />

          {/*<a-animation
            attribute="scale"
            to="1.1 1.1 1.1"
            direction="alternate"
            dur="4000"
            repeat="indefinite" />*/}
        </a-obj-model>

        {/** ANGER **/}
        <a-obj-model src="#anger" position="0 -3.5 -7" scale="0.8 0.8 0.8" material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          {/*clawing thing*/}
          <a-animation
            attribute="rotation"
            to='0 0 -45'
            dur="1000"
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

         <a-obj-model src="#anger" rotation="0 45 0" position="0 -3.5 -7" scale="0.8 0.8 0.8" material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to='0 45 -45'
            dur="1000"
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        <a-obj-model src="#anger" rotation="0 180 0" position="0 -3.5 -7" scale="0.8 0.8 0.8" material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to='0 180 -45'
            dur="1000"
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

        <a-obj-model src="#anger" rotation="0 225 0" position="0 -3.5 -7" scale="0.8 0.8 0.8" material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to='0 225 -45'
            dur="1000"
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        {/** SADNESS **/}
        <a-obj-model src="#sadness" position="0 -3 -7" material="src: #plastic; color: rgb(159, 190, 221);">
          {/*rotates*/}
          <a-animation
            easing="linear"
            attribute="rotation"
            dur="5000"
            to="0 360 0"
            repeat="indefinite"></a-animation>
            {/*changes opacity*/}
          <a-animation
            attribute="opacity"
            from="0.8"
            to="0.5"
            dur="2000"
            easing="ease-in-out"
            direction="alternate"
            repeat="indefinite"
          />
        </a-obj-model>

        {/** LIGHTS **/}

        {/*purplish light*/}
        <a-entity light="color: #ffaaff; intensity: 3" position="5 5 5"></a-entity>

        {/*ambient light*/}
        <a-entity light="color: white; type: ambient;"></a-entity>

        {/*light inside of joy*/}
        <a-entity light="color: #94c6ff; distance: 15; intensity: 7; type: point" position="0 -1 -7"></a-entity>


      </a-scene>
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
