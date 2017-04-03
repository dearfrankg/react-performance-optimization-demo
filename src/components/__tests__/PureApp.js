import React from 'react'
import { mount } from 'enzyme'
import PureApp from '../PureApp'
import { Assert, getSpecWrapper } from '../../utils/unit'

describe('PureApp Component', (Component = PureApp) => {
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
    describe('PureApp component', () => {
      beforeEach(() => {
        // props.todo.todos = [ {}, {} ]
      })

      it('should contain correct children', () => {
        let actual
        actual = getComponent().find('button').at(0).type()
        expect(actual).toBe('button')
        actual = getComponent().find('button').at(1).type()
        expect(actual).toBe('button')
        actual = getComponent().find('button').at(2).type()
        expect(actual).toBe('button')

        getComponent().find('button').at(0).simulate('click')
        getComponent().find('button').at(1).simulate('click')
        getComponent().find('button').at(2).simulate('click')
      })
    })

  })

  describe('callbacks', () => {

  })

  describe('props passed to components', () => {

  })
})
