import * as actions from './index'

describe('actions', () => {
  it('toggleSideMenu should create TOGGLE_SIDE_MENU action', () => {
    expect(actions.toggleSideMenu).toEqual({
      type: 'TOGGLE_SIDE_MENU'
    })
  })

  it('loadJobs should create LOAD_JOBS action', () => {
    const array = [{uid: 'bdef'}, {uid: 'geg3f'}]
    expect(actions.loadJobs(array)).toEqual({
      type: 'LOAD_JOBS',
      array
    })
  })
})
