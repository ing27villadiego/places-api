'use strict'
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const REACTIONS = ['like', 'love', 'disappointment', 'yummy', 'anger', 'disgust']

let visitSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  _place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true
  },
  reaction: {
    type: String,
    enum: REACTIONS
  },
  observation: String
})

visitSchema.statics.forUser = function(userId,page) {
  return Vist.paginate({ '_user': userId }, { page: page, limit: 5, sort: { '_id': -1 }})
}


visitSchema.plugin(mongoosePaginate)

const Vist = mongoose.model('Visit', visitSchema)
module.exports = Vist