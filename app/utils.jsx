export const positiveBgs = ['0 -90 9','0 -90 30', '0 45 0', '0 170 0', '0 -90 0', '0 -60 0', '0 -150 0', '0 -105 0', '0 0 0', '0 -60 15', '-10 0 10']
export const negativeBgs = ['0 170 0','0 262 0', '0 0 0', '0 -45 -15', '0 -60 0', '0 -160 0', '0 -90 0']

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

export const generateRandom = () => {
  const negative = Math.random() > 0.5 ? -1 : 1
  return (Math.random() * 50).toFixed(2) * negative
}

export const generateDisplacement = (randomize) => {
  return randomize? [+generateRandom(), +generateRandom(), +generateRandom()] : [0,0,0]
}

export const generatePosition = (initialPos, displacement) => {
  const [oldX, oldY, oldZ] = initialPos;
  const [moveX, moveY, moveZ] = displacement
  return `${oldX + moveX} ${oldY + moveY} ${oldZ + moveZ}`
}

