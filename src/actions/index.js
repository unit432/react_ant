export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'
export const LOAD_JOBS = 'LOAD_JOBS'

export const toggleSideMenu = ({
  type: TOGGLE_SIDE_MENU
})

export const loadJobs = array => ({
  type: LOAD_JOBS,
  array
})
