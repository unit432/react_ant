import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { fetchJobs, errorMessage } from './index'
import { testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import {
  FETCH_JOBS_REQUEST,
  LOAD_JOBS,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from '../actions/actionTypes'

describe('saga test', () => {
  it('fetchJobs works', () => {
    const polling = () => ({})
    const jobs = { data: [{ uid: 'a' }, { uid: 'b' }] }

    testSaga(fetchJobs, polling)
      .next()

      .put({ type: FETCH_JOBS_REQUEST })
      .next()

      .call(polling)
      .next(jobs)

      .put({ type: LOAD_JOBS, payload: [{ uid: 'a' }, { uid: 'b' }] })
      .next()

      .put({ type: FETCH_JOBS_SUCCESS })
      .next()

      .call(delay, 3000)
      .next()

      .finish()
      .isDone()
  })

  it('fetchJobs handles errors', () => {
    const polling = () => ({ })
    // const errorMessage = (msg) => ({ msg })
    const error = new Error('Network Error')

    testSaga(fetchJobs, polling)
      .next()

      .put({ type: FETCH_JOBS_REQUEST })
      .next()

      .throw(error)
      .call(errorMessage, error.message)
      .next()

      .put({ type: FETCH_JOBS_FAILURE, error })
      .next()

      .call(delay, 7000)
      .next()

      .finish()
      .isDone()
  })
})
