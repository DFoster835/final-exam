const gamesRouter = require('express').Router()
const Game = require('../models/games')

gamesRouter.get('/', async (request, response) => {
	// TODO: complete implementation for GET all
	Game.find({}).then(result => {
	response.json([result])
	})
})

gamesRouter.post('/', async (request, response) => {
  const blog = new Game(request.body)
	// TODO: implement input validation
  if (game === undefined)
  blog
    .save()
    .then(result => {
	  console.log('success');
      response.status(201).json(result)
    })
})

// TODO: implement GET /:id for a specific game
gamesRouter.get('/games/:id, async(req, res) => {
		Game.findById(req.params.id).then(result => {
	response.json(result);
	})
})

// TODO: implement DELETE /:id to remove a game

module.exports = gamesRouter

