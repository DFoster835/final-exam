const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
	// TODO: complete schema
winner: String,
moves: {
	player: Number,
	computer: Number
},
playedAt: Date
})

gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
