'use strict'
const express = require('express')
const router = express.Router()

const usersController = require('../controllers/UsersController')
const sessionsController = require('../controllers/SessionsController')

router.route('/')
  .post(usersController.create,
        sessionsController.generateToken,
        sessionsController.sendToken)

  //.get(usersController.myPlaces)

  //.get(usersController.destroyAll)

module.exports = router
