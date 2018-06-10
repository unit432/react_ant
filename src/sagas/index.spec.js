import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { fetchJobs } from './index'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

describe('saga test', () => {
  it('fetchJobs works', () => {
    const api = {
      fetchData: id => ({ data: [{ uid: 'a' }, { uid: 'b' }] })
    }

    return expectSaga(fetchJobs, api)
      .put({ type: 'LOAD_JOBS', payload: [{uid: 'a'}, {uid: 'b'}] })
      .put({ type: 'FETCH_JOBS_SUCCESS' })
      .run()
  })

  it('fetchJobs handles errors', () => {
    const api = { fetchData: id => ({ }) }
    const error = new Error('error')

    return expectSaga(fetchJobs, api)
      .provide([
        [matchers.call.fn(api.fetchData), throwError(error)]
      ])
      .put({ type: 'FETCH_JOBS_FAILURE', error })
      .run()
  })
})
