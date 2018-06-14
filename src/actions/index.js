export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'
export const LOAD_JOBS = 'LOAD_JOBS'
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST'
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE'
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'


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
