export const positiveBgs = ['0 -90 9','0 -90 30', '0 45 0', '0 170 0', '0 -90 0', '0 -60 0', '0 -150 0', '0 -105 0', '0 0 0', '0 -60 15', '-10 0 10']
export const negativeBgs = ['0 170 0','0 262 0', '0 0 0', '0 -45 -15', '0 -60 0', '0 -160 0', '0 -90 0']
export const lightColors = {
  joy: '#FF7700',
  sadness: '#bababa',
  fear: '#315632',
  anger: '#af0e00',
  surprise: '#d337af',
}

export const  supriseAnimColor = (eVal) => {
  const g = 100 - eVal;
  const b = 180 - eVal;
  return `rgb(255,${g},${b})`
}

export const metalness = (eVal) => {
  return (eVal/100).toFixed(2)
}

export const surpiseAnimScale = (eVal) => {
  return (eVal/20).toFixed(1)
}

export const renderScale = (scale) => {
  return `${scale} ${scale} ${scale}`
}

export const surpiseAnimDuration = (eVal) => {
  const val = eVal * 100
  const diff = 700 - val
  if (diff < 0) {
      return 300;
  } else {
      return (300 + diff);
  }
}

export const generateValue = (eVal, delta, lowerBound) => {
  const val = (eVal/100).toFixed(2)
  return (val*delta) + lowerBound
}

export const fearScale = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*.7) + .3
}
export const fearOpacity = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*1) + .5
}

export const joyScale = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*2.8) + .7
}

export const joyLight = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*20) + 1
}

export const angerScale = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*1.5) + .5
}

export const angerAnimDuration = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*1650) + 350
}

export const angerClawDegree = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return -((val*25) + 40)
}

export const sadnessScale = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*2.5) + .4
}

export const getSkyAngle = (bg) => {
  const [emotion, num] =  bg.split('-')
  if (emotion==='pos'){
    return positiveBgs[num-1]
  } else {
    return negativeBgs[num-1]
  }
}

export const fearColor = (eVal) => {
  let r = 40 - eVal
  if(r < 0) r = 0
  let g = 55 - eVal;
  if(g < 0) g = 0
  let b = 65 - eVal;
  if(b < 0) b = 0
  return `rgb(${r},${g},${b})`
}

export const joyColor = (eVal) => {
  let g = 160 - eVal;
  if(g < 120) g = 120
  let b = 113 - eVal;
  if(b < 113) b = 0
  return `rgb(186,${g},${b})`
}

export const sadnessOpacityHigh = (eVal) => {
  const val = (eVal/100).toFixed(2)
  return (val*.6) + .2
}

export const sadnessOpacityLow = (eVal) => {
  return sadnessOpacityHigh(eVal) - .2
}

export const generateRandom = () => {
  const negative = Math.random() > 0.5 ? -1 : 1
  return (Math.random() * 50).toFixed(2) * negative
}

export const generateDisplacement = () => {
  return [+generateRandom(), +generateRandom(), +generateRandom()]
}

export const generatePosition = (initialPos, displacement) => {
  const [oldX, oldY, oldZ] = initialPos;
  const [moveX, moveY, moveZ] = displacement
  return `${oldX + moveX} ${oldY + moveY} ${oldZ + moveZ}`
}

export const chooseLightColor = (dominant) => {
  return lightColors[dominant]
}
