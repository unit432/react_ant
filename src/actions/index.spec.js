import * as actions from './index'

describe('actions', () => {
  it('toggleSideMenu should create TOGGLE_SIDE_MENU action', () => {
    expect(actions.toggleSideMenu).toEqual({
      type: 'TOGGLE_SIDE_MENU'
    })
  })
})
