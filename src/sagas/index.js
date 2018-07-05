import { delay } from 'redux-saga'
import { put, call, all } from 'redux-saga/effects'
import { fetchData } from '../api/aria2c'
import { message } from 'antd'
import {
  FETCH_JOBS_REQUEST,
  LOAD_RPC_RETURN,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from '../actions/actionTypes'

export function errorMessage(msg) {
  message.destroy()
  message.error(msg, 0)
}

export function destoryMessage() {
  message.destroy()
}

export const paramsBuilder = () => {
  return [[{"methodName":"aria2.tellActive"},{"methodName":"aria2.tellWaiting","params":[0,1000]},{"methodName":"aria2.tellStopped","params":[0,1000]},{"methodName":"aria2.getGlobalStat"},{"methodName":"aria2.getGlobalOption"}]]
}

export function* rpcCall() {
  while (true) {
    try {
      yield put({ type: FETCH_JOBS_REQUEST })
      const params = paramsBuilder()
      const rpcReturn = yield call(fetchData, 'multicall', params)
      yield put({ type: LOAD_RPC_RETURN, data: rpcReturn.data })
      yield put({ type: FETCH_JOBS_SUCCESS })
      yield call(destoryMessage)
      yield call(delay, 2000)
    } catch (error) {
      yield call(errorMessage, error.message)
      yield put({ type: FETCH_JOBS_FAILURE, error })
      yield call(delay, 7000)
    }
  }
}

export default function* rootSaga() {
  yield all([ call(rpcCall) ])
}
