'use strict'

const db = require('APP/db')
const Dream = db.model('dreams')


// routes to api/analytics
/*
Need to add user ids and a self check on the get routes!
We can use req.user.id inside these.
*/
module.exports = require('express').Router()

	.get('/:userId', (req, res, next) => {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 8);

    Dream.findAll({
      where: {
        user_id: req.params.userId,
        date: {
          $gt: lastWeek
        }
      }
    })
    .then(dream => res.send(dream))
    .catch(next)
  })


