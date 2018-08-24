import { LOAD_RPC_RETURN } from "../actions/actionTypes";
import downloadJobs from "./downloadJobs";

describe("downloads reducers", () => {
  const globalSetting = {
    downloadSpeed: "123",
    numActive: "7",
    numStopped: "2",
    numStoppedTotal: "8",
    numWaiting: "1",
    uploadSpeed: "30"
  };

  const result = [
    [[{ uid: "x" }, { uid: "y" }]],
    [[]],
    [[{ uid: "d1", downloadSpeed: "1152" }]],
    [globalSetting],
    [{ "always-resume": "true" }]
  ];

  const rpcReturn = {
    id: "accd6535-de76-42cb-a902-f1d7488f9616",
    jsonrpc: "2.0",
    result: result
  };

  const fetchedJobs = {
    type: LOAD_RPC_RETURN,
    data: rpcReturn
  };

  it("should handle empty array", () => {
    expect(downloadJobs([], fetchedJobs)).toEqual([
      { uid: "x" },
      { uid: "y" },
      { uid: "d1", downloadSpeed: "1152" }
    ]);
  });

  it("should update existing array", () => {
    const currentState = [
      { uid: "x" },
      { uid: "y" },
      { uid: "d1", downloadSpeed: "14" }
    ];

    expect(downloadJobs(currentState, fetchedJobs)).toEqual([
      { uid: "x" },
      { uid: "y" },
      { uid: "d1", downloadSpeed: "1152" }
    ]);
  });

  it("returns default state if action is unkonw", () => {
    expect(downloadJobs([], { type: "UNKNOW_ACTION" })).toEqual([]);
  });
});
