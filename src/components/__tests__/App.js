import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : () => {},
    removeListener: () => {}
  }
}

describe('sanity', () => {
  const component = mount(<App />)

  it('should be norm', () => {
    const actual = component.childAt(0).type()
    const expected = 'h2'
    expect(actual).toBe(expected)
  })
})
