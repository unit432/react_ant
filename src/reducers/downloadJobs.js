import { LOAD_JOBS } from '../actions/actionTypes'

const downloadJobs = (state = [], action) => {
  switch (action.type) {
    case LOAD_JOBS:
      let merged_arr = []
      for (let element of state) {
        if (!action.array.map(x => x.uid).includes(element.uid))
          merged_arr.push(element)
      }
      return merged_arr.concat(action.array)
    default:
      return state
  }
}

export default downloadJobs
