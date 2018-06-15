const frontend = (state =
  {
    showSideMenu: true,
    isFetching: false,
    fetchFailed: false
  }, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_MENU':
      return Object.assign({}, state, { showSideMenu: !state.showSideMenu })
    case 'FETCH_JOBS_REQUEST':
      return Object.assign({}, state, { isFetching: !state.isFetching })
    case 'FETCH_JOBS_FAILURE':
      return Object.assign({}, state, { fetchFailed: !state.fetchFailed })
    default:
      return state
  }
}

export default frontend
