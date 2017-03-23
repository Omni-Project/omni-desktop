'use strict'

const db = require('APP/db')
const env = require('APP').env
const Dream = db.model('dreams')
const {selfOnly} = require('./auth.filters')
const jwt = require('jsonwebtoken')


// routes to api/dreams
/*
Need to add user ids and a self check on the get routes!
We can use req.user.id inside these.
*/
module.exports = require('express').Router()
  .use((req, res, next) => {
    //checks for an authenticated user, if there is one, for protected endpoints
    //do we have a user on the session?
    if(req.user) {
      //if ye, just move on to the protected routes
      console.log('we got us a authenticated user!')
      return next()
    }
    else {
      //if no, check for a JWT
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      console.log('token is', token)
      if(token){
        //token found
        jwt.verify(token, env.JWT_SECRET, function(err, decoded) {
          if (err) {
            return res.status(403).send('Failed to authenticate token');
          } else {
            console.log('decoded token', decoded)
            // if everything is good, save user to req.user for use in other routes
            req.user = decoded;
            return next();
          }
        });
      } else {
        console.log('welp, no token or user')
        //token not found, don't do anything to req.user
        return next()
      }
    }
  })
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
    req.body.user_id = req.params.id;

    Dream.create(req.body)
    .then(dream => res.send(dream))
    .catch(next)
  })


