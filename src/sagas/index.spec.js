import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { addUris, fetchJobs, errorMessage, destoryMessage } from './index'
import { testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import {
  FETCH_JOBS_REQUEST,
  LOAD_JOBS,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from '../actions/actionTypes'
import { add_uris } from '../actions'

describe('saga test', () => {
  describe('fetchJobs', () => {
    it('works', () => {
      const polling = () => ({})
      const jobs = { data: { result: [{ uid: 'a' }, { uid: 'b' }] } }

      testSaga(fetchJobs, polling)
        .next()

        .put({ type: FETCH_JOBS_REQUEST })
        .next()

        .call(polling)
        .next(jobs)

        .put({ type: LOAD_JOBS, array: [{ uid: 'a' }, { uid: 'b' }] })
        .next()

        .put({ type: FETCH_JOBS_SUCCESS })
        .next()

        .call(destoryMessage)
        .next()

        .call(delay, 3000)
        .next()

        .finish()
        .isDone()
    })

    it('handles errors', () => {
      const polling = () => ({ })
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
})
