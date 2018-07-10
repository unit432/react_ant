import * as actions from './index'
import {
  ADD_URIS,
  BUILD_ARIA2_CMD,
  CLEAN_ARIA2_CMD,
  TOGGLE_SIDE_MENU,
  LOAD_RPC_RETURN,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from './actionTypes'

describe('actions', () => {
  it('toggleSideMenu should create TOGGLE_SIDE_MENU action', () => {
    expect(actions.toggleSideMenu).toEqual({
      type: TOGGLE_SIDE_MENU
    })
  })

  it('fetchJobsRequest should create FETCH_JOBS_REQUEST action', () => {
    const job_type = 'tellActive'
    expect(actions.fetchJobsRequest(job_type)).toEqual({
      type: FETCH_JOBS_REQUEST,
      job_type
    })
  })

  it('fetchJobsFailure should create FETCH_JOBS_FAILURE action', () => {
    const error = 'network error'
    expect(actions.fetchJobsFailure(error)).toEqual({
      type: FETCH_JOBS_FAILURE,
      error
    })
  })

  it('fetchJobsSuccess should create FETCH_JOBS_SUCCESS action', () => {
    expect(actions.fetchJobsSuccess).toEqual({
      type: FETCH_JOBS_SUCCESS
    })
  })

  it('addUris should create ADD_URIS action', () => {
    const uris = ['http://host/file2.zip', 'http://host/file2.zip']
    expect(actions.addUris(uris)).toEqual({
      type: ADD_URIS,
      uris: uris
    })
  })

  it('loadRpcReturn should create LOAD_RPC_RETURN aciton', () => {
    const data = [[], [], [], [], []]
    expect(actions.loadRpcReturn(data)).toEqual({
      type: LOAD_RPC_RETURN,
      data: data
    })
  })
})

describe('buildAria2Cmd', () => {
  it('create BUILD_ARIA2_CMD action', () => {
    expect(
      actions.buildAria2Cmd('aria2.addUri')
    ).toEqual({
      type: BUILD_ARIA2_CMD,
      cmd: 'aria2.addUri'
    })
  })
})

describe('cleanAria2Cmd', () => {
  it('create CLEAN_ARIA2_CMD action', () => {
    expect(
      actions.cleanAria2Cmd
    ).toEqual({
      type: CLEAN_ARIA2_CMD
    })
  })
})
