import frontend from './frontend'

describe('frontend reducers', () => {
  it('should handle initial state', () => {
    expect(
      frontend(true, {})
    ).toEqual(true)
  })

  it('should toggle hide_side_menu state', () => {
    expect(
      frontend(false, { type: 'TOGGLE_SIDE_MENU' })
    ).toEqual(true)
  })
})
