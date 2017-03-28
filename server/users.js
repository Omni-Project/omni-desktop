'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden, selfOnly} = require('./auth.filters')

module.exports = require('express').Router()
	.post('/update/:id/password', selfOnly('only user can update their password'), (req, res, next) =>
		User.findById(req.params.id)
		.then(user => {
			return user.authenticate(req.body.oldPassword)
				.then(ok => {
					if(!ok) return res.json({success: false, msg: 'Current password incorrect'})
					return user.update({password: req.body.newPassword})
						.then(updatedUser => res.json({success: true, user: updatedUser}))
				})
		})
		.catch(next))

	.post('/update/:id/info', selfOnly('only user can edit their info'), (req, res, next) =>
		User.findById(req.params.id)
		.then(user => user.update(req.body))
		.then(updatedUser => res.json({success: true, user: updatedUser}))
		.catch(next))
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.scope('dreams').findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
