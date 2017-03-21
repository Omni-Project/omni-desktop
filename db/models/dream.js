'use strict'

const {env} = require('APP')
const Sequelize = require('sequelize')
const db = require('APP/db')
const user = require('./dream.js')
const indico = require('indico.io');
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

    /* emotions params here */
    angerVal: Sequelize.INTEGER,
    sadnessVal: Sequelize.INTEGER,
    joyVal: Sequelize.INTEGER,
    fearVal: Sequelize.INTEGER,
    surpriseVal: Sequelize.INTEGER,
    randomizingFactor: Sequelize.INTEGER

}, {
    getterMethods: {
        totalHoursSlept: function() {
            const endHour = (this.sleepEndHour * 60) + this.sleepEndMinute;
            const startHour = (this.sleepStartHour * 60) + this.sleepStartMinute;

            let unformattedTime = startHour < endHour ? endHour - startHour : (24*60 - startHour) + endHour;
            return Math.floor(unformattedTime / 60) + ":" + (unformattedTime % 60)
        }
    },
    hooks: {
      beforeCreate: analyzeText
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
    })
    .then(() => indico.personas(content, {top_n: 1}))
    .then((persona) => dream.persona = Object.keys(persona)[0])
    .catch(console.error)
}



module.exports = Dream;
