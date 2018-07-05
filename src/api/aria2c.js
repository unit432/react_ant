import axios from 'axios'

const baseURL = 'http://10.31.192.75:6800/jsonrpc'
export const fetchData = (action, params) => {
  const jsonreq = systemReqBuilder(action, params)
  return axios.post(baseURL, jsonreq)
}

export const systemReqBuilder = (name, params) => {
  return { jsonrpc: '2.0', id: 'netant', method: 'system.' + name, params: params }
}
