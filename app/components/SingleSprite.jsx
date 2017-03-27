import 'aframe';
import React from 'react';

import { supriseAnimColor, metalness, surpiseAnimScale, renderScale , surpiseAnimDuration,
  fearScale, fearOpacity, joyScale, joyLight, angerScale, angerAnimDuration, angerClawDegree,
  sadnessScale, generateDisplacement, generatePosition } from '../utils'


export default (props) => {
    const dream = props.dream;
    const displacement = generateDisplacement(props.randomizePosition)
    return (
      <a-entity>

        {/** SURPRISE **/}
        <a-obj-model src="#surprise" material={`src: #plastic; metalness: ${metalness(dream.surpriseVal)}`} position={generatePosition([0,-2,-7],displacement)} scale="0 0 0">
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
        <a-obj-model src="#fear" position={generatePosition([0,0,-7],displacement)} scale={renderScale(fearScale(dream.fearVal))} material={`color: black; opacity:${fearOpacity(dream.fearVal)}`}>
          {/*bobs up and down*/}
          <a-animation
            attribute="position"
            from={generatePosition([0,0,-7],displacement)}
            to={generatePosition([0,-0.5,-7],displacement)}
            easing="ease-back"
            direction="alternate"
            dur="1500"
            fill="forwards"
            repeat="indefinite" />
        </a-obj-model>

        {/** JOY **/}
        <a-obj-model src="#joy" position={generatePosition([0,-1,-7],displacement)} scale={renderScale(joyScale(dream.joyVal))} material="color: rgb(196, 145, 51); roughness: 0; metalness: 0.3" >
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
        <a-obj-model src="#anger" position={generatePosition([0,-4,-7],displacement)} scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          {/*clawing thing*/}
          <a-animation
            attribute="rotation"
            to={`0 0 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

         <a-obj-model src="#anger" rotation="0 45 0" position={generatePosition([0,-4,-7],displacement)} scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 45 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        <a-obj-model src="#anger" rotation="0 180 0" position={generatePosition([0,-4,-7],displacement)} scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 180 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>

        <a-obj-model src="#anger" rotation="0 225 0" position={generatePosition([0,-4,-7],displacement)} scale={renderScale(angerScale(dream.angerVal))} material="color: #a80500;  metalness:1; roughness: 0; sphericalEnvMap: #sky;">
          <a-animation
            attribute="rotation"
            to={`0 225 ${angerClawDegree(dream.angerVal)}`}
            dur={angerAnimDuration(dream.angerVal)}
            direction="alternate"
            easing="ease-out-back"
            repeat="indefinite" />
        </a-obj-model>


        {/** SADNESS **/}
        <a-obj-model src="#sadness" scale={renderScale(sadnessScale(dream.sadnessVal))} position={generatePosition([0,-2,-7],displacement)} material="color: rgb(41, 52, 68)">
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
        {/*light inside of joy*/}
        <a-entity light={`color: #94c6ff; distance: 15; intensity: ${joyLight(dream.joyVal)}; type: point`} position="0 -1 -7"></a-entity>

      </a-entity>
    );

}
