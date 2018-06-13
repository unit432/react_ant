import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { fetchJobs } from './index'
import { testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

describe('saga test', () => {
  it('fetchJobs works', () => {
    const polling = () => ({})
    const jobs = { data: [{ uid: 'a' }, { uid: 'b' }] }

    testSaga(fetchJobs, polling)
      .next()

      .put({ type: 'FETCH_JOBS_REQUEST' })
      .next()

      .call(polling)
      .next(jobs)

      .put({ type: 'LOAD_JOBS', payload: [{ uid: 'a' }, { uid: 'b' }] })
      .next()

      .put({ type: 'FETCH_JOBS_SUCCESS' })
      .next()

      .call(delay, 2000)
      .next()

      .finish()
      .isDone()
  })

  it('fetchJobs handles errors', () => {
    const polling = () => ({ })
    const error = new Error('Newwork Error')

    testSaga(fetchJobs, polling)
      .next()

      .put({ type: 'FETCH_JOBS_REQUEST' })
      .next()

      .throw(error)
      .put({ type: 'FETCH_JOBS_FAILURE', error })

      .finish()
      .isDone()
  })
})
