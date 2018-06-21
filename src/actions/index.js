import {
  ADD_URIS,
  TOGGLE_SIDE_MENU,
  LOAD_JOBS,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from './actionTypes'

export const toggleSideMenu = ({
  type: TOGGLE_SIDE_MENU
})

export const loadJobs = array => ({
  type: LOAD_JOBS,
  array
})

export const fetch_jobs = job_type => ({
  type: FETCH_JOBS_REQUEST,
  job_type
})

export const fetch_jobs_failure = error => ({
  type: FETCH_JOBS_FAILURE,
  error
})

export const fetch_jobs_success = ({
  type: FETCH_JOBS_SUCCESS
})

export const add_uris = uris => ({
  type: ADD_URIS,
  uris: uris
})
