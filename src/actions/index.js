export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'
export const LOAD_ACTIVE_JOBS = 'LOAD_ACTIVE_JOBS'

export const toggleSideMenu = ({
  type: TOGGLE_SIDE_MENU
})

export const loadActiveJobs = array => ({
  type: LOAD_ACTIVE_JOBS,
  array
})
