import React from 'react'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { FeedbackDialog } from 'components/FeedbackDialog'
import { wrapWithMaterialUIContext } from 'utilities/wrapWithContext'

import { AppBar } from 'components/AppBar'

const getProps = (extraProps = {}) => ({
  config: [],
  type: 'CAS',
  moduleName: 'CAS Portal',
  countryCode: 'us',
  isLoggedOn: false,
  ...extraProps,
})

describe('<AppBar />', () => {
  test('<AppBar /> renders properly', () => {
    expect(renderer.create(wrapWithMaterialUIContext(<AppBar {...getProps()} />))).toMatchSnapshot()
	})
	
	test('should not render <FeedbackDialog /> if specific props are invalid', () => {
		const wrapper = mount(<AppBar {...getProps()} />)
		expect(wrapper.find(FeedbackDialog).length).toEqual(0)
	})

	test('should render <FeedbackDialog /> if specific props are valid', () => {
		const wrapper = mount(<AppBar
			config={[]}
			type={'CAS'}
			moduleName={'CAS Portal'}
			countryCode={'us'}
			isLoggedOn={false}
			userEmail={'STUB'}
			afterSendFeedback={() => {}}
			selectedYard={60}
			homeYard={'STUB'}
			selectedRole={'STUB'}
			countryCode={'ST'}
			language={'STUB'}
		/>)

		expect(wrapper.find('FeedbackDialog').length).toEqual(1)
	})

  test('should render LogOut Menu when isLoggedOn=true', () => {
		const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ isLoggedOn: true })} />))
    expect(tree.find('LogOutMenu').exists()).toBe(true)
  })

  test('should render different components based on config', () => {
    const configPropToComponentMap = {
      role: 'div.role',
      yard: 'div.yardNumber',
      flag: 'Flag',
    }
    Object.keys(configPropToComponentMap).forEach((config) => {
			const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps({ config: [ config ], isLoggedOn: true })} />))
      expect(tree.find(configPropToComponentMap[config]).exists()).toBe(true)
    })
  })

  describe('<SearchBar />', () => {
    test('should render search bar when both showSearchBar=true & renderSearchbar is defined ', () => {
      const renderSearchbar = jest.fn(() => () => <span className="searchBar" />)
      const configsToRender = [
        {
          props: { showSearchBar: true, renderSearchbar },
          exists: true,
        },
        {
          props: { showSearchBar: false, renderSearchbar },
          exists: false,
        },
        {
          props: { showSearchBar: true },
          exists: false,
        },
      ]
      configsToRender.forEach((config) => {
        const tree = mount(wrapWithMaterialUIContext(<AppBar {...getProps(config.props)} />))
        expect(tree.find('div.searchBar').exists()).toEqual(config.exists)
      })
    })
  })
})
