import {
  TOGGLE_SIDE_MENU,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from '../actions/actionTypes'

const frontend = (state =
  {
    hideSideMenu: false,
    isFetching: false,
    fetchFailed: false
  }, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return Object.assign({}, state, { hideSideMenu: !state.hideSideMenu })
    case FETCH_JOBS_REQUEST:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_JOBS_FAILURE:
      return Object.assign({}, state, { fetchFailed: true })
    case FETCH_JOBS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, fetchFailed: false })
    default:
      return state
  }
}

export default frontend
