import sideMenu from './index'

describe('reducers', () => {
  it('should handle initial state', () => {
    expect(
      sideMenu(true, {})
    ).toEqual(true)
  })

  it('should toggle hide_side_menu state', () => {
    expect(
      sideMenu(false, { type: 'TOGGLE_SIDE_MENU' })
    ).toEqual(true)
  })
})
