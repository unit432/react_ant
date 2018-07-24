import { BUILD_ARIA2_CMD, CLEAN_ARIA2_CMD } from "../actions/actionTypes";

const initialState = [
  [
    { methodName: "aria2.tellActive" },
    { methodName: "aria2.tellWaiting", params: [0, 1000] },
    { methodName: "aria2.tellStopped", params: [0, 1000] },
    { methodName: "aria2.getGlobalStat" },
    { methodName: "aria2.getGlobalOption" }
  ]
];

const aria2Command = (state = initialState, action) => {
  switch (action.type) {
    case BUILD_ARIA2_CMD:
      if (
        initialState[0].map(x => x.methodName).includes(action.cmd.methodName)
      ) {
        let newState = initialState[0].map(element => {
          if (element.methodName === action.cmd.methodName) {
            return action.cmd;
          } else {
            return element;
          }
        });
        return [newState];
      } else {
        return [state[0].concat(action.cmd)];
      }
    case CLEAN_ARIA2_CMD:
      return [state[0].filter(x => !x.once)];
    default:
      return state;
  }
};

export default aria2Command;
