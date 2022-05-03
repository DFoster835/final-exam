const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
	// TODO: complete schema
winner: {
	type: String,
},
moves: {
	type: {
	player: {
		type: Number,
		required: true
	},
	computer: {
		type: Number,
		required: true
	}
}	
},
playedAt: {
	type: Date
	default: Date.now
}
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
