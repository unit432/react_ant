
import React from 'react'
import Panel from './Panel'
import renderer from 'react-test-renderer'

describe("Panel", () => {
  it('Panel renders a list of downloads', () => {
    const rendered_panel = renderer
      .create(<Panel />)
      .toJSON();
    expect(rendered_panel).toMatchSnapshot()
  })
})
