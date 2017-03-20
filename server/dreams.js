'use strict'

const db = require('APP/db')
const Dreams = db.model('dreams')


// routes to api/dreams
module.exports = require('express').Router()
	.post('/', (req, res, next) => {
    Dreams.create(req.body)
    .then(data => res.send(data))
    .catch(next)
  })

