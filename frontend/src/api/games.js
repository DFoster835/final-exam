import axios from 'axios'

const baseUrl = "https://localhost:3009/api/games"

const funcs = {
  getAll: async() => axios.get(baseUrl),
  create: async(game) => axios.post(baseUrl, game)
}

inport default funcs
