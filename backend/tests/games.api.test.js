const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Game = require('../models/games')

const games = [
	{
		"winner": "player",
		"moves": {
			"player": 0,
			"computer": 2
		}
	},
	{
		"winner": "computer",
		"moves": {
			"player": 0,
			"computer": 1
		}
	},
]

const testPlayedAtValue = new Date(+1619743623)

beforeAll(async (done) => {
	// clear out any existing data
	await Game.deleteMany({})
	// save initial data
	let saves = games.map(async ({ winner, moves }) => {
		return new Game({ winner, moves, playedAt: testPlayedAtValue }).save()
	})
	// block until saves are complete
	await Promise.all(saves)
	done()
})

describe('GET /api/games', () => {
	test('games are returned as json', async () => {
		await api
			.get('/api/games')
			.expect(200)
				//TODO: assert that API returned expected number of games
			const response = await api.get('/api/games')
			expect(response.body).toHaveLength(games.length)
		
	})
})


describe('POST /api/games', () => {
	const newGame = {
		winner: "player",
		playerMove: 0,
		computerMove: 1
	}; 
	
	test('create a new game', async () => {
		// TODO: assert that API return new game object
		await api.post('/api/games')
			.send(newGame)
			.expect(201)
			.expect('Content-Type', /application/json/)
			.then(async (res) => {
				const {winner, moves} = res.body
				console.log("Winner is", res.body)
				expect({winner, moves}).toEqual({
					winner: newGame.winner,
					moves: {
						player: newGame.playerMove,
						computer: newGame.computerMove
					}
				});		
		})
	})
})

afterAll((done) => {
	mongoose.connection.close(done)
})
