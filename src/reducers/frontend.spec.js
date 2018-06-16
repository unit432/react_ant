import frontend from './frontend'
import {
  TOGGLE_SIDE_MENU,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from '../actions/actionTypes'

describe('frontend reducers', () => {
  let initialState

  beforeEach (() => {
    initialState = {
      hideSideMenu: true,
      isFetching: true,
      fetchFailed: true
    }
  })

  it('should handle initial state', () => {
    expect(
      frontend(initialState, {})
    ).toEqual(initialState)
  })

  it('should toggle hide_side_menu state', () => {
    expect(
      frontend(initialState, { type: TOGGLE_SIDE_MENU }).hideSideMenu
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

  it('should handle FETCH_JOBS_SUCCESS action', () => {
    expect(
      frontend(initialState, { type: FETCH_JOBS_SUCCESS }).isFetching
    ).toEqual(false)

    expect(
      frontend(initialState, { type: FETCH_JOBS_SUCCESS }).fetchFailed
    ).toEqual(false)
  })
})
