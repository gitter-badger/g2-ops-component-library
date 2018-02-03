import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import AppBar from '../AppBar'

const getProps = (extraProps = {}) => ({
  config: [],
  type: 'CAS',
  moduleName: 'CAS Portal',
  countryCode: 'us',
  isLoggedOn: false,
  ...extraProps
})

describe('<AppBar />', () => {
  test('<AppBar /> renders properly', () => {
    expect(renderer.create(wrapWithMaterialUIContext(<AppBar {...getProps()} />))).toMatchSnapshot()
  })

  test('<AppBar /> render LogOut Menu when Logged In', () => {
    const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ isLoggedOn: true })} />))
    expect(tree.find('LogoutMenu').exists()).toBeTruthy()
  })
})
