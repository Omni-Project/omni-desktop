'use strict'

const db = require('APP/db')
const env = require('APP').env
const Dream = db.model('dreams')
const {selfOnly} = require('./auth.filters')
const jwt = require('jsonwebtoken')


// routes to api/dreams
module.exports = require('express').Router()
  .use((req, res, next) => {
    //checks for an authenticated user, if there is one, for protected endpoints
    //do we have a user on the session?
    if(req.user) {
      //if yes, just move on to the protected routes
      return next()
    }
    else {
      //if no, check for a JWT
      const token = req.query.token;
      if(token){
        //token found
        jwt.verify(token, env.JWT_SECRET, function(err, decoded) {
          if (err) {
            return res.status(403).send('Failed to authenticate token');
          } else {
            // if everything is good, save user to req.user for use in other routes
            req.user = decoded;
            return next();
          }
        });
      } else {
        //token not found, don't do anything to req.user
        return next()
      }
    }
  })
  .get('/public/', (req, res, next ) => {
    Dream.findAll({
      where : {
        isPublic: true
      }
    })
    .then(data => res.send(data))
    .catch(next)
  })
  //this route does not have selfOnly on it since some dreams are public!
  .get('/user/:id/:dreamId', (req, res, next) => {
    Dream.findById(req.params.dreamId)
    .then(dream => {
      //check if dream is public!
      if(dream.isPublic) {
        res.send(dream)
      }
      else{
        //check if the user requesting dream is the dream's author
        if (+req.params.id !== +req.user.id) {
          return res.status(403).send(`You can only request dream yourself.`)
        } else {
          res.send(dream)
        }
      }
    })
    .catch(next)
  })
  .get('/user/:id', selfOnly('get dreams'), (req, res, next) => {
     Dream.findAll({
       where: {
         user_id: req.params.id
        },
      order: 'date DESC'
      })
    .then(data => res.send(data))
    .catch(next)
  })
  .delete('/user/:id/:dreamId', selfOnly('delete dreams'), (req, res, next) => {
    Dream.findById(req.params.dreamId)
    .then(dream => dream.destroy())
    .then(result => res.send(result))
    .catch(next)
  })
	.post('/user/:id', (req, res, next) => {
    req.body.user_id = req.params.id;
    if(req.body.dreamId){
      Dream.findById(req.body.dreamId)
      .then(dream => dream.update(req.body))
      .then(dream => res.send(dream))
      .catch(next)
    } else {
      Dream.create(req.body)
      .then(dream => res.send(dream))
      .catch(next)
    }
  })


