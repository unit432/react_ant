import * as actions from './index'

describe('actions', () => {
  it('toggleSideMenu should create TOGGLE_SIDE_MENU action', () => {
    expect(actions.toggleSideMenu).toEqual({
      type: 'TOGGLE_SIDE_MENU'
    })
  })

  it('loadActiveJobs should create LOAD_ACTIVE_JOBS action', () => {
    const array = [{uid: 'bdef'}, {uid: 'geg3f'}]
    expect(actions.loadActiveJobs(array)).toEqual({
      type: 'LOAD_ACTIVE_JOBS',
      array
    })
  })
})
