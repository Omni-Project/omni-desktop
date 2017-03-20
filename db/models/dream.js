'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const user = require('./dream.js')

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
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    /* personas from indico */
    persona: {
        type: Sequelize.STRING
    },
    /* logging user's sleep here */
    sleepStartTime: {
        type: Sequelize.INTEGER
    },
    sleepEndTime: {
        type: Sequelize.INTEGER
    },

    /* emotions params here */
    angerVal: {
        type: Sequelize.INTEGER
    },
    sadnessVal: {
        type: Sequelize.INTEGER
    },
    joyVal: {
        type: Sequelize.INTEGER
    },
    fearVal: {
        type: Sequelize.INTEGER
    },
    disgustVal: {
        type: Sequelize.INTEGER
    },

    randomize: {
        type: Sequelize.INTEGER
    }

}, {
    hooks: {
        beforeUpdate: setHours
    }
});

function setHours(user) {
  user.averageSleep = user.email && user.email.toLowerCase()
  user.sleepDebt = user.email && user.email.toLowerCase()

  return new Promise((resolve, reject) => something )
}

module.exports = Dream;