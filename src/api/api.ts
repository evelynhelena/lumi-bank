import Axios from 'axios'

let baseURL = ''

if (typeof window !== 'undefined') {
  baseURL = window.location.href;

}
const url = baseURL === 'http://localhost:3000/' ?  'http://127.0.0.1:3001':'https://server-lumi-bank-3.onrender.com'


const api = Axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api