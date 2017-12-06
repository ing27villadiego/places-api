'use strict'
const express = require('express')

//llaves y configuracion sencible
const jwtMiddleware = require('express-jwt')
const secrets = require('../config/secrets')

//middlewares
const authenticateOwner = require('../middlewares/authenticateOwer')
const findUser = require('../middlewares/findUser')

//controllers
const favoritesController = require('../controllers/FavoritesController')

let router = express.Router()

router.route('/')
  .get(jwtMiddleware({ secret: secrets.jwtSecret }), findUser, favoritesController.index)
  .post(favoritesController.create)

router.route('/:id')
  .delete(favoritesController.find,authenticateOwner,favoritesController.destroy)


module.exports = router
