import Axios from 'axios'

const url = 'https://server-lumi-bank-3.onrender.com'

const api = Axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api