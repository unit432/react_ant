import { put, call, all, takeLatest } from 'redux-saga/effects'
import fetchData from '../api/aria2c'

export function* fetchJobs(api) {
  try {
    yield put({ type: 'FETCH_JOBS_REQUEST' })
    const jobs = yield call(api)
    yield put({ type: 'LOAD_JOBS', payload: jobs.data })
    yield put({ type: 'FETCH_JOBS_SUCCESS' })
  } catch (error) {
    yield put({ type: 'FETCH_JOBS_FAILURE', error })
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('FETCH_JOBS_REQUEST', fetchJobs(fetchData))
  ])
}
