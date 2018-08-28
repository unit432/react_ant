import { put, call, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import { rootSaga, rpcCall, errorMessage, destoryMessage } from "./index";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import {
  CLEAN_ARIA2_CMD,
  FETCH_JOBS_REQUEST,
  LOAD_RPC_RETURN,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from "../actions/actionTypes";
import { fetchData } from "../api/aria2c";
import { getAria2Command, getHostAddr, getPort } from "./selectors";

describe("rpcCall", () => {
  it("works", () => {
    const result = [[{ uid: "a" }, { uid: "b" }], [], [], [], []];
    const rpcReturns = { data: { result: result } };
    const commandSets = [[]];
    const host = "127.0.0.1";
    const port = "6800";

    testSaga(rpcCall)
      .next()

      .put({ type: FETCH_JOBS_REQUEST })
      .next()

      .select(getHostAddr)
      .next(host)

      .select(getPort)
      .next(port)

      .select(getAria2Command)
      .next(commandSets)

      .call(fetchData, host, port, "multicall", commandSets)
      .next(rpcReturns)

      .put({ type: LOAD_RPC_RETURN, data: rpcReturns.data })
      .next()

      .put({ type: CLEAN_ARIA2_CMD })
      .next()

      .put({ type: FETCH_JOBS_SUCCESS })
      .next()

      .call(destoryMessage)
      .next()

      .call(delay, 1000)
      .next()

      .finish()
      .isDone();
  });

  it("handles errors", () => {
    const error = new Error("Network Error");

    testSaga(rpcCall)
      .next()

      .put({ type: FETCH_JOBS_REQUEST })
      .next()

      .throw(error)
      .call(errorMessage, error.message)
      .next()

      .put({ type: FETCH_JOBS_FAILURE, error })
      .next()

      .call(delay, 1000)
      .next()

      .finish()
      .isDone();
  });
});

describe("rootSaga", () => {
  it("works", () => {
    expectSaga(rootSaga)
      .call(rpcCall)
      .run();
  });
});
