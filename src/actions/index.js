import {
  ADD_URIS,
  TOGGLE_SIDE_MENU,
  LOAD_RPC_RETURN,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from './actionTypes'

export const toggleSideMenu = ({
  type: TOGGLE_SIDE_MENU
})

export const fetchJobsRequest = job_type => ({
  type: FETCH_JOBS_REQUEST,
  job_type
})

export const fetchJobsFailure = error => ({
  type: FETCH_JOBS_FAILURE,
  error
})

export const fetchJobsSuccess = ({
  type: FETCH_JOBS_SUCCESS
})

export const addUris = uris => ({
  type: ADD_URIS,
  uris: uris
})

export const loadRpcReturn = (data) => ({
  type: LOAD_RPC_RETURN,
  data: data
})
