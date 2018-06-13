import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { fetchJobs } from './index'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

describe('saga test', () => {
  it('fetchJobs works', () => {
    const fetchData = () => ({ data: [{ uid: 'a' }, { uid: 'b' }] })

    return expectSaga(fetchJobs, fetchData)
      .put({ type: 'FETCH_JOBS_REQUEST' })
      .put({ type: 'LOAD_JOBS', payload: [{uid: 'a'}, {uid: 'b'}] })
      .put({ type: 'FETCH_JOBS_SUCCESS' })
      .run()
  })

  it('fetchJobs handles errors', () => {
    const fetchData = () => ({ })
    const error = new Error('error')

    return expectSaga(fetchJobs, fetchData)
      .provide([
        [matchers.call.fn(fetchData), throwError(error)]
      ])
      .put({ type: 'FETCH_JOBS_REQUEST' })
      .put({ type: 'FETCH_JOBS_FAILURE', error })
      .run()
  })
})
