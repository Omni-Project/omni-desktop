import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import Sky from './Sky'
import { supriseAnimColor, metalness, surpiseAnimScale, renderScale , surpiseAnimDuration,
  fearScale, fearOpacity, joyScale, joyLight, angerScale, angerAnimDuration, angerClawDegree,
  sadnessScale, getSkyAngle } from '../utils'

// const dummyData = {surpriseVal: 12, fearVal: 15, joyVal: 20, angerVal: 22, sadnessVal: 31}
// const majorSurprise =  {surpriseVal: 60, fearVal: 6, joyVal: 21, angerVal: 7, sadnessVal: 6}
// const majorAnger =  {surpriseVal: 10, fearVal: 21, joyVal: 7, angerVal: 47, sadnessVal: 15}
// const majorFear =  {surpriseVal: 21, fearVal: 47, joyVal: 7, angerVal: 10, sadnessVal: 15}
// const majorJoy =  {surpriseVal: 21, fearVal: 10, joyVal: 47, angerVal: 15, sadnessVal: 7}
// const majorSadness =  {surpriseVal: 10, fearVal: 21, joyVal: 7, angerVal: 15, sadnessVal: 47}

export default class VRScene extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    const dream = this.props.dream
    const bgAngle = getSkyAngle(dream.background)
    console.log(dream.background, bgAngle)
    return (

      <div id="embedded">
      <a-scene embedded>

        {/*SKY*/}
        <a-sky src="#sky" rotation={bgAngle} />


        <a-assets>
          {/* MODELS */}
          <a-asset-item id="surprise" src="/objects/surprise.obj"></a-asset-item>
          <a-asset-item id="joy" src="/objects/joy.obj"></a-asset-item>
          <a-asset-item id="sadness" src="/objects/sadness.obj"></a-asset-item>
          <a-asset-item id="anger" src="/objects/anger.obj"></a-asset-item>
          <a-asset-item id="fear" src="/objects/fear.obj"></a-asset-item>
          {/*SKY/ENV*/}
          <img id="sky" src={`/env-images/${dream.background}.jpg`} />
          {/** TEXTURES **/}
          <img id="plastic" src="/textures/plastic.jpg" />
        </a-assets>



        {/** SURPRISE **/}
        <a-obj-model src="#surprise" material={`src: #plastic; metalness: ${metalness(dream.surpriseVal)}`} position="0 -2 -7" scale="0 0 0">
          {/*change size (pulsate)*/}
          <a-animation
            attribute="scale"
            to={renderScale(surpiseAnimScale(dream.surpriseVal))}
            easing="ease-in-out"
            direction="alternate"
            dur="2000"
            repeat="indefinite" />
            {/*change color*/}
          <a-animation
            attribute="color"
            from="#ff7da7"
            to={supriseAnimColor(dream.surpriseVal)}
            dur={surpiseAnimDuration(dream.surpriseVal)}
            easing="ease-in"
            direction="alternate"
            repeat="indefinite"
          />
        </a-obj-model>

        {/** FEAR **/}
        <a-obj-model src="#fear" position="0 0 -7" scale={renderScale(fearScale(dream.fearVal))} material={`color: black; opacity:${fearOpacity(dream.fearVal)}`}>
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
        <a-obj-model src="#joy" position="0 -1 -7" scale={renderScale(joyScale(dream.joyVal))} material="color: rgb(196, 145, 51); roughness: 0; metalness: 0.3" >
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
        <a-obj-model src="#anger" position="0 -4 -7" scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          {/*clawing thing*/}
          <a-animation
            attribute="rotation"
            to={`0 0 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

         <a-obj-model src="#anger" rotation="0 45 0" position="0 -4 -7" scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 45 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        <a-obj-model src="#anger" rotation="0 180 0" position="0 -4 -7" scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 180 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

        <a-obj-model src="#anger" rotation="0 225 0" position="0 -4 -7" scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 225 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        {/** SADNESS **/}
        <a-obj-model src="#sadness" scale={renderScale(sadnessScale(dream.sadnessVal))} position="0 -2 -7" material="color: rgb(41, 52, 68)">
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
        <a-entity light={`color: #94c6ff; distance: 15; intensity: ${joyLight(dream.joyVal)}; type: point`} position="0 -1 -7"></a-entity>

        <a-camera position="0 -3 7"></a-camera>

      </a-scene>
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
