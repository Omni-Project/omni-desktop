'use strict'

const db = require('APP/db')
const Dream = db.model('dreams')


// routes to api/dreams
/*
Need to add user ids and a self check on the get routes!
We can use req.user.id inside these.
*/
module.exports = require('express').Router()
  .get('/:id', (req, res, next) => {
    Dream.findById(req.params.id)
    .then(data => res.send(data))
    .catch(next)
  })
	.post('/', (req, res, next) => {
    Dream.create(req.body)
    .then(data => res.send(data))
    .catch(next)
  })


