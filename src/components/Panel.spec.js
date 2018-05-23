import React from 'react'
import Panel from './Panel'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

describe("Panel", () => {
  it('Panel renders a list of downloads', () => {
    const rendered_panel = renderer
      .create(<MemoryRouter><Panel /></MemoryRouter>)
      .toJSON();
    expect(rendered_panel).toMatchSnapshot()
  })
})
