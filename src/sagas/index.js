import { delay } from 'redux-saga'
import { put, call, all } from 'redux-saga/effects'
import { fetchData } from '../api/aria2c'
import { message } from 'antd'
import {
  FETCH_JOBS_REQUEST,
  LOAD_JOBS,
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

export function* fetchJobs(api) {
  while(true) {
    try {
      yield put({ type: FETCH_JOBS_REQUEST })
      const jobs = yield call(api)
      yield put({ type: LOAD_JOBS, array: jobs.data.result })
      yield put({ type: FETCH_JOBS_SUCCESS })
      yield call(destoryMessage)
      yield call(delay, 3000)
    } catch (error) {
      yield call(errorMessage, error.message)
      yield put({ type: FETCH_JOBS_FAILURE, error })
      yield call(delay, 7000)
    }
  }
}

export default function* rootSaga() {
  yield all([
    call(fetchJobs, fetchData)
  ])
}
