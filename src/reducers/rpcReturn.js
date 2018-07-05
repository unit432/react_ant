import { LOAD_RPC_RETURN } from '../actions/actionTypes'
import downloadJobs from './downloadJobs'

const initialState = {
  jobs: [],
  globalStats: {
    downloadSpeed: 0,
    numActive: 0,
    numStopped: 0,
    numStoppedTotal: 0,
    numWaiting: 0,
    uploadSpeed: 0
  },
  globalOption: {
  }
}

const loadRpcReturn = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RPC_RETURN:
      return { ...state, globalStats: action.data.result[3][0], jobs: downloadJobs(state.downloadJobs, action) }
    default:
      return state 
  }
}

export default loadRpcReturn
