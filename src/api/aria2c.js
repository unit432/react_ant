import axios from 'axios'

const fetchData = () => {
  return axios.get('http://localhost:443/jsonrpc')
}

export default fetchData
