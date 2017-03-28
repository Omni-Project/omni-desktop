'use strict'

const {env} = require('APP')
const Sequelize = require('sequelize')
const db = require('APP/db')
const User = require('./user.js')
const indico = require('indico.io');
const _ = require('lodash');
indico.apiKey =  env.INDICO_API_KEY;


const Dream = db.define('dreams', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 150],
                msg: "Please enter a title with at least 1 character but no more than 150."
            }
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    /* keywords from indico */
    keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    /* tags from user when writing journal */
    dreamType: Sequelize.STRING,
    /* personas from indico */
    persona: Sequelize.STRING,
    /* logging user's sleep here */
    sleepStartHour: Sequelize.INTEGER,
    sleepStartMinute: Sequelize.INTEGER,
    sleepEndHour: Sequelize.INTEGER,
    sleepEndMinute: Sequelize.INTEGER,
    date: Sequelize.DATEONLY,

    /* emotions params here */
    angerVal: Sequelize.INTEGER,
    sadnessVal: Sequelize.INTEGER,
    joyVal: Sequelize.INTEGER,
    fearVal: Sequelize.INTEGER,
    surpriseVal: Sequelize.INTEGER,
    dominant: Sequelize.STRING,
    background: Sequelize.STRING,
    randomVal: Sequelize.INTEGER

}, {
    getterMethods: {
        totalHoursSlept: function() {
            const endHour = (this.sleepEndHour * 60) + this.sleepEndMinute;
            const startHour = (this.sleepStartHour * 60) + this.sleepStartMinute;
            let unformattedTime = startHour < endHour ? endHour - startHour : (24*60 - startHour) + endHour;

            return (Math.floor(unformattedTime / 60) + ((unformattedTime % 60) / 60)).toFixed(2)
        }
    },
    hooks: {
      beforeCreate: analyzeText,

      afterCreate: function(dream){
        return User.findById(dream.user_id)
            .then(user => {
              let totalHours = +dream.totalHoursSlept;
              let averageSleep = ((+user.averageSleep + totalHours) / 2).toFixed(2);
              let sleepDebt = totalHours < 8 ? user.sleepDebt + (8 - totalHours)
                                             : user.sleepDebt - (totalHours - 8);

              sleepDebt = sleepDebt < 0 ? 0 : sleepDebt;

              return user.update({averageSleep, sleepDebt})
            })
            .catch(console.error)
        }
    }
});


//call to indico API
function analyzeText(dream) {
  const content = dream.content;
  return indico.keywords(content, {version: 2, top_n: 5})
    .then((keywords) => dream.keywords = Object.keys(keywords))
    .then(() => indico.emotion(content))
    .then((emotions) => {
        const { anger, joy, fear, sadness, surprise } = emotions;
        dream.angerVal = Math.round(anger * 100);
        dream.fearVal = Math.round(fear * 100);
        dream.joyVal = Math.round(joy * 100);
        dream.sadnessVal = Math.round(sadness * 100);
        dream.surpriseVal = Math.round(surprise * 100);
        dream.dominant = getDominant(buildEmotionObj(dream))
        dream.background = chooseBg(dream.dominant)
        dream.randomVal = Math.round(Math.random() * 100)
    })
    .then(() => indico.personas(content, {top_n: 1}))
    .then((persona) => dream.persona = Object.keys(persona)[0])
    .catch(console.error)
}

//builds emotion obj that getDominant will loop over
function buildEmotionObj (dream){
    return {"surprise": dream.surpriseVal,
      "fear": dream.fearVal,
      "joy": dream.joyVal,
      "anger": dream.angerVal,
      "sadness": dream.sadnessVal }
}

//gets dominant emotion in dream
function getDominant (emotionsObj) {
  const dominant = _.reduce(emotionsObj, (result, value, key) => {
    if (result.value < value) {
      result.value = value;
      result.emotion = key
    }
    return result
  }, {emotion: '', value: 0})
  return dominant.emotion
}

const numOfPosBg = 11
const numOfNegBg = 7
//selects a random background image filename for sprite.
//Doing this on the backend because front-end was selecting multple background but loading the first one
//causing a conflict with the background image angle (selected on SpriteScene.jsx)
function chooseBg (dominant) {
  if(dominant === 'joy' || dominant === 'surprise'){
    return `pos-${((Math.floor(Math.random() * numOfPosBg)) + 1)}`
  } else {
    return `neg-${((Math.floor(Math.random() * numOfNegBg)) + 1)}`
  }
}

module.exports = Dream;
