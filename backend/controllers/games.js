const gamesRouter = require('express').Router()
const Game = require('../models/games')

gamesRouter.get('/', async (request, response) => {
	// TODO: complete implementation for GET all
	Game.find({}).then(result => {
	response.json([result])
	})
})

gamesRouter.post('/', async (request, response) => {
  const game = new Game(request.body)
	// TODO: implement input validation
  if (game === undefined)
  game
    .save()
    .then(result => {
	  console.log('success');
      response.status(200).json(result)
    })
})

// TODO: implement GET /:id for a specific game
gamesRouter.get('/games/:id, async(req, res) => {
		Game.findById(req.params.id).then(result => {
	response.json(result);
	})
})

// TODO: implement DELETE /:id to remove a game
gamesRouter.post('/games/delete/:id, async(req, res)  => {
		 Game.findByIdAndDelete(req.params.id).then(result => {
	response.json(result);
	})
})

module.exports = gamesRouter

