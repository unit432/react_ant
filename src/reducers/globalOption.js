import { UPDATE_GLOBAL_OPTION } from "../actions/actionTypes";
const initialState = {
  host: "127.0.0.1",
  port: "6800"
};

const globalOption = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GLOBAL_OPTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default globalOption;
