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

  describe('TOGGLE_SIDE_MENU action', () => {
    it('should toggle hide_side_menu state', () => {
      expect(
        frontend(initialState, { type: TOGGLE_SIDE_MENU }).hideSideMenu
      ).toEqual(false)
    })
  })


  describe('FETCH_JOBS_REQUEST action', () => {
    it('should set isFetching state to true', () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_REQUEST }).isFetching
      ).toEqual(true)
    })
  })

  describe('FETCH_JOBS_FAILURE action', () => {
    it('should set fetchFailed to true', () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_FAILURE }).fetchFailed
      ).toEqual(true)
    })
  })

  describe('FETCH_JOBS_SUCCESS action', () => {
    it('should set isFetching to false', () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_SUCCESS }).isFetching
      ).toEqual(false)
    })

    it('should set fetchFailed to false', () => {
      expect(
        frontend(initialState, { type: FETCH_JOBS_SUCCESS }).fetchFailed
      ).toEqual(false)
    })
  })
})