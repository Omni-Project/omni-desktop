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
            },
        unique: true
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: null
    },
    
    /* logging user's sleep here */
    sleepStartTime: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
    sleepEndTime: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },

    /* emotions params here */
    angerVal: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
    sadnessVal: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
    joyVal: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
    fearVal: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
    disgustVal: {
        type: Sequelize.INTEGER,
        defaultValue: null
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