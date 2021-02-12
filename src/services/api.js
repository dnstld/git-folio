import axios from 'axios'

const baseURL = 'https://api.github.com/'

export default {
  getUser: (user) => axios.get(`${baseURL}users/${user}`),
}
