import axios from 'axios'

const url = "https://localhost:8000/api"
const API = axios.create({
    baseUrl: url
})

export const getAllGames = () => API.get('/games');
export const getGameID = (id) => API.get('/games'/${id}`,)
export const postGame = (data) => API.post('/games',data)
export const deleteGame = (id) => API.delete('/games'/${id}`,)
