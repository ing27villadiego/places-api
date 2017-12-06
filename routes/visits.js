'use strict'
const express = require('express')
const jwtMiddleware = require('express-jwt')
const secrets = require('../config/secrets')
const authenticateOwner = require('../middlewares/authenticateOwer')
const visitsController = require('../controllers/VisitsController')

let router = express.Router()

router.route('/')
  .get( jwtMiddleware({ secret: secrets.jwtSecret }),visitsController.index)
  .post(visitsController.create)

router.route('/:visit_id')
  .delete(visitsController.find,authenticateOwner,visitsController.destroy)
 
 
module.exports = router