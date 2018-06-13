import { delay } from 'redux-saga'
import { put, call, all } from 'redux-saga/effects'
import fetchData from '../api/aria2c'

export function* fetchJobs(api) {
  while(true) {
    try {
      yield put({ type: 'FETCH_JOBS_REQUEST' })
      const jobs = yield call(api)
      yield put({ type: 'LOAD_JOBS', payload: jobs.data })
      yield put({ type: 'FETCH_JOBS_SUCCESS' })
      yield call(delay, 2000)
    } catch (error) {
      yield put({ type: 'FETCH_JOBS_FAILURE', error })
    }
  }
}

export default function* rootSaga() {
  yield all([
    call(fetchJobs, fetchData)
  ])
}
