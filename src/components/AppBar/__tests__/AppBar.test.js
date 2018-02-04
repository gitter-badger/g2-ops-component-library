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

  test('should render LogOut Menu when isLoggedOn=true', () => {
    const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ isLoggedOn: true })} />))
    expect(tree.find('LogoutMenu').exists()).toBe(true)
  })

  test('should render different components based on config', () => {
    const configPropToComponentMap = {
      role: 'div.role',
      yard: 'div.yardNumber',
      phone: 'div.phoneNumber',
      flag: 'Flag'
    }
    Object.keys(configPropToComponentMap).forEach((config) => {
      const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ config: [ config ], isLoggedOn: true })} />))
      expect(tree.find(configPropToComponentMap[config]).exists()).toBe(true)
    })
  })

  describe('<SearchBar />', () => {
    test('should render search bar when both showSearchBar=true & searchBarRenderer is defined ', () => {
      const searchBarRenderer = jest.fn(() => () => <div className="searchBar" />)
      const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ showSearchBar: true, searchBarRenderer })} />))
      expect(tree.find('div.searchBar').exists()).toBe(true)
    })

    test('should not render search bar when both showSearchBar=false & searchBarRenderer is defined ', () => {
      const searchBarRenderer = jest.fn(() => () => <div className="searchBar" />)
      const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ showSearchBar: false, searchBarRenderer })} />))
      expect(tree.find('div.searchBar').exists()).toBe(false)
    })

    test('should not render search bar when both showSearchBar=true & searchBarRenderer is not defined ', () => {
      const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ showSearchBar: true })} />))
      expect(tree.find('div.searchBar').exists()).toBe(false)
    })
  })
})
