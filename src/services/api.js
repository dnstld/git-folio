import axios from 'axios'

export const API = 'https://api.github.com/'

export const getUser = async (user) => axios.get(`${API}users/${user}`)
