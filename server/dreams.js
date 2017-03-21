'use strict'

const db = require('APP/db')
const Dream = db.model('dreams')


// routes to api/dreams
module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Dream.findAll()
    .then(data => res.send(data))
    .catch(next)
  })
	.post('/', (req, res, next) => {
    Dream.create(req.body)
    .then(data => res.send(data))
    .catch(next)
  })

