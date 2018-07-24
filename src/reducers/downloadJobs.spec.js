import { LOAD_RPC_RETURN } from "../actions/actionTypes";
import downloadJobs from "./downloadJobs";

describe("downloads reducers", () => {
  const rpcReturn = {
    id: "accd6535-de76-42cb-a902-f1d7488f9616",
    jsonrpc: "2.0",
    result: [
      [[{ uid: "x" }, { uid: "y" }]],
      [[]],
      [[{ uid: "d1", downloadSpeed: "1152" }]],
      [
        {
          downloadSpeed: "123",
          numActive: "7",
          numStopped: "2",
          numStoppedTotal: "8",
          numWaiting: "1",
          uploadSpeed: "30"
        }
      ],
      [
        {
          "always-resume": "true"
        }
      ]
    ]
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

  it("should add new elements to existing array", () => {
    const currentState = [{ uid: "u3" }, { uid: "u4" }];
    expect(downloadJobs(currentState, fetchedJobs)).toEqual([
      { uid: "u3" },
      { uid: "u4" },
      { uid: "x" },
      { uid: "y" },
      { uid: "d1", downloadSpeed: "1152" }
    ]);
  });

  it("should update existing array with content from new array", () => {
    const currentJobs = [
      { uid: "u3" },
      { uid: "u4" },
      { uid: "d1", downloadSpeed: "10" }
    ];
    expect(downloadJobs(currentJobs, fetchedJobs)).toEqual([
      { uid: "u3" },
      { uid: "u4" },
      { uid: "x" },
      { uid: "y" },
      { uid: "d1", downloadSpeed: "1152" }
    ]);
  });

  it("returns default state if action is unkonw", () => {
    expect(downloadJobs([], { type: "UNKNOW_ACTION" })).toEqual([]);
  });
});
