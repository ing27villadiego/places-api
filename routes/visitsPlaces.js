'use strict'
const express = require('express')

const authenticateOwner = require('../middlewares/authenticateOwer')
const visitsController = require('../controllers/VisitsController')
const placesController = require('../controllers/PlacesController')

let router = express.Router()

router.route('/:id/visits')
  .get(placesController.find, visitsController.index)
  .post(placesController.find,visitsController.create)

router.route('/:id/visits/:visit_id')
  .delete(visitsController.find,authenticateOwner,visitsController.destroy)
 
 
module.exports = router