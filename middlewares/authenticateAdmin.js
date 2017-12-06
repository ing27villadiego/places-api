'use strict'

module.exports = function(req,res,next) {
  if(req.fullUser && req.fullUser.admin) return next()
  next(new Error('You have no permision to be here'))
}
