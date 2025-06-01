import Axios from 'axios'

const url = 'http://localhost:3001'

const api = Axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api