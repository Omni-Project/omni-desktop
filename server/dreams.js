'use strict'

const db = require('APP/db')
const Dream = db.model('dreams')
const {selfOnly} = require('./auth.filters')


// routes to api/dreams
/*
Need to add user ids and a self check on the get routes!
We can use req.user.id inside these.
*/
module.exports = require('express').Router()
 .get('/user/:id/:dreamId', selfOnly('get dreams'), (req, res, next) => {
    Dream.findById(req.params.dreamId)
    .then(data => res.send(data))
    .catch(next)
  })
  .get('/user/:id', selfOnly('get dreams'), (req, res, next) => {
     Dream.findAll({
       where: {
         user_id: req.params.id
        }
      })
    .then(data => res.send(data))
    .catch(next)
  })
	.post('/user/:id', (req, res, next) => {
    Dream.create(req.body)
    .then(dream => dream.setUser(req.params.id))
    .then(dream => res.send(dream))
    .catch(next)
  })


