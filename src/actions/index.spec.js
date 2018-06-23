import * as actions from './index'
import {
  ADD_URIS,
  TOGGLE_SIDE_MENU,
  LOAD_JOBS,
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

  it('loadJobs should create LOAD_JOBS action', () => {
    const array = [{uid: 'bdef'}, {uid: 'geg3f'}]
    expect(actions.loadJobs(array)).toEqual({
      type: LOAD_JOBS,
      array
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
})
