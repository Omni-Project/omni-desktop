import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import Sky from './Sky'

const dummyData = {surpriseVal: 7, fearVal: 6, joyVal: 60, angerVal: 21, sadnessVal: 6}
const dummyData2 =  {surpriseVal: 60, fearVal: 6, joyVal: 21, angerVal: 7, sadnessVal: 6}

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

  fearScale(eVal){
    const val = (eVal/100).toFixed(2)
    return (val*.7) + .3
  }
  fearOpacity(eVal){
    const val = (eVal/100).toFixed(2)
    return (val*.9) + .1
  }

  joyScale(eVal){
    const val = (eVal/100).toFixed(2)
    return (val*2.8) + .7
  }

  joyLight(eVal){
    const val = (eVal/100).toFixed(2)
    return (val*20) + 1
  }

  angerScale(eVal){
    const val = (eVal/100).toFixed(2)
    return (val*1.5) + .5
  }

  angerAnimDuration(eVal) {
    const val = (eVal/100).toFixed(2)
    return (val*1650) + 350
  }

  angerClawDegree(eVal) {
    const val = (eVal/100).toFixed(2)
    return -((val*25) + 40)
  }

  sadnessScale(eVal){
    const val = (eVal/100).toFixed(2)
    return (val*2.5) + .4
  }

  render () {
    const surpriseVal = dummyData.surpriseVal;
    const fearVal = dummyData.fearVal;
    const joyVal = dummyData.joyVal;
    const angerVal = dummyData.angerVal;
    const sadnessVal = dummyData.sadnessVal
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
        <a-obj-model src="#fear" position="0 0 -7" scale={this.renderScale(this.fearScale(fearVal))} material={`color: black; opacity:${this.fearOpacity(fearVal)}`}>
          {/*bobs up and down*/}
          <a-animation
            attribute="position"
            from="0 0 -7"
            to="0 -0.5 -7"
            easing="ease-back"
            direction="alternate"
            dur="1500"
            fill="forwards"
            repeat="indefinite" />
        </a-obj-model>

        {/** JOY **/}
        <a-obj-model src="#joy" position="0 -1 -7" scale={this.renderScale(this.joyScale(joyVal))} material="src: #rust; color: #9b8b65; roughness: 0; metalness: 0.3" >
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
        <a-obj-model src="#anger" position="0 -4 -7" scale={this.renderScale(this.angerScale(angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          {/*clawing thing*/}
          <a-animation
            attribute="rotation"
            to={`0 0 ${this.angerClawDegree(angerVal)}`}
            dur={this.angerAnimDuration(angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

         <a-obj-model src="#anger" rotation="0 45 0" position="0 -4 -7" scale={this.renderScale(this.angerScale(angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 45 ${this.angerClawDegree(angerVal)}`}
            dur={this.angerAnimDuration(angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        <a-obj-model src="#anger" rotation="0 180 0" position="0 -4 -7" scale={this.renderScale(this.angerScale(angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 180 ${this.angerClawDegree(angerVal)}`}
            dur={this.angerAnimDuration(angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

        <a-obj-model src="#anger" rotation="0 225 0" position="0 -4 -7" scale={this.renderScale(this.angerScale(angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 225 ${this.angerClawDegree(angerVal)}`}
            dur={this.angerAnimDuration(angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        {/** SADNESS **/}
        <a-obj-model src="#sadness" scale={this.renderScale(this.sadnessScale(sadnessVal))} position="0 -2 -7" material="color: rgb(41, 52, 68)">
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
            from="0.5"
            to="0.251"
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
        <a-entity light={`color: #94c6ff; distance: 15; intensity: ${this.joyLight(joyVal)}; type: point`} position="0 -1 -7"></a-entity>


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
