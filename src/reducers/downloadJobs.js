import { LOAD_RPC_RETURN } from '../actions/actionTypes'

const downloadJobs = (state = [], action) => {
  switch (action.type) {
    case LOAD_RPC_RETURN:
      let merged_arr = []
      let jobArray = action.data.result.slice(0,3).filter( x => x[0][0] ).map(x => x[0])
      const flaten_arr = [].concat.apply([], jobArray)
      for (let element of state) {
        if (!flaten_arr.map(x => x.uid).includes(element.uid)){
          merged_arr.push(element)
        }
      }
      merged_arr = merged_arr.concat(flaten_arr)
      return merged_arr
    default:
      return state
  }
}

export default downloadJobs
