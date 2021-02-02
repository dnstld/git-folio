import axios from 'axios'

export default {
  getUser: (user) =>
    axios
      .get(`https://api.github.com/users/${user}`)
}