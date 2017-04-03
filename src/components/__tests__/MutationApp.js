import React from 'react'
import { mount } from 'enzyme'
import MutationApp from '../MutationApp'
import { Assert, getSpecWrapper } from '../../utils/unit'

describe('MutationApp Component', (Component = MutationApp) => {
  let props
  let mountedComponent

  const getComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount( <Component {...props} /> )
    }
    return mountedComponent
  }

  const assert = Assert.create(getComponent)

  beforeEach(() => {
    props = {

    }
    mountedComponent = undefined
  })

  describe('rendering', () => {
    describe('MutationApp component', () => {
      beforeEach(() => {
        // props.todo.todos = [ {}, {} ]
      })

      it('should contain correct children', () => {
        let actual
        actual = getComponent().find('button').at(0).type()
        expect(actual).toBe('button')

        getComponent().find('button').at(0).simulate('click')
      })
    })

  })

  describe('callbacks', () => {

  })

  describe('props passed to components', () => {

  })
})
