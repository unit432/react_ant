import { LOAD_RPC_RETURN } from "../actions/actionTypes";

const downloadJobs = (state = [], action) => {
  switch (action.type) {
    case LOAD_RPC_RETURN:
      let jobArray = action.data.result
        .slice(0, 3)
        .filter(x => x[0][0])
        .map(x => x[0]);
      const flaten_arr = [].concat.apply([], jobArray);
      return flaten_arr;
    default:
      return state;
  }
};

export default downloadJobs;
