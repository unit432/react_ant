import axios from 'axios'

const fetchData = () => {
  return axios.get('http://localhost:6800/jsonrpc')
}

export default fetchData
