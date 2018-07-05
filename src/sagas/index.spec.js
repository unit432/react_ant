import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { addUris, rpcCall, errorMessage, destoryMessage, paramsBuilder } from './index'
import { testSaga } from 'redux-saga-test-plan'
import { throwError } from 'redux-saga-test-plan/providers'
import {
  FETCH_JOBS_REQUEST,
  LOAD_RPC_RETURN,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from '../actions/actionTypes'
import { fetchData } from '../api/aria2c'

describe('saga test', () => {
  describe('rpcCall', () => {
    it('works', () => {
      const polling = () => ({ })
      const result = [[{ uid: 'a' }, { uid: 'b' }], [], [], [], []]
      const rpcReturns = { data: { result: result } }

      testSaga(rpcCall, polling)
        .next()

        .put({ type: FETCH_JOBS_REQUEST })
        .next()

        .call(fetchData, 'multicall', paramsBuilder())
        .next(rpcReturns)

        .put({ type: LOAD_RPC_RETURN, data: rpcReturns.data })
        .next()

        .put({ type: FETCH_JOBS_SUCCESS })
        .next()

        .call(destoryMessage)
        .next()

        .call(delay, 2000)
        .next()

        .finish()
        .isDone()
    })

    it('handles errors', () => {
      const polling = () => ({ })
      const error = new Error('Network Error')

      testSaga(rpcCall, polling)
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
