import frontend from './frontend'
import {
  TOGGLE_SIDE_MENU,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from '../actions'

describe('frontend reducers', () => {
  let initialState

  beforeEach (() => {
    initialState = {
      showSideMenu: true,
      isFetching: false,
      fetchFailed: false
    }
  })

  it('should handle initial state', () => {
    expect(
      frontend(initialState, {})
    ).toEqual(initialState)
  })

  it('should toggle hide_side_menu state', () => {
    expect(
      frontend(initialState, { type: TOGGLE_SIDE_MENU }).showSideMenu
    ).toEqual(false)
  })

  it('should handle isFetching state', () => {
    expect(
      frontend(initialState, { type: FETCH_JOBS_REQUEST }).isFetching
    ).toEqual(true)
  })

  it('should handle fetchFailed state', () => {
    expect(
      frontend(initialState, { type: FETCH_JOBS_FAILURE }).fetchFailed
    ).toEqual(true)
  })
})
