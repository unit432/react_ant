import React from 'react'
import THead from './TopHead'
import renderer from 'react-test-renderer'

describe("HeadMenu", () => {
  it('HeadMenu renders a toggle icon', () => {
    const rendered_head = renderer
      .create(<THead />)
      .toJSON();
    expect(rendered_head).toMatchSnapshot()
  })
})
