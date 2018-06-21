import axios from 'axios'

const baseURL = 'http://10.31.192.75:6800/jsonrpc'
const fetchData = () => {
  return axios.get(baseURL, { params: { 'jsonrpc': '2.0', 'method':'aria2.tellActive', 'id':'netant' } })
}

export const requestFactory = (name, params) => {
  var jsonreq = {
    jsonrpc: '2.0',
    id: 'netant',
    method: 'aria2.' + name,
    params: params
  }

  return jsonreq
}

export default fetchData
