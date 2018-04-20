import React from 'react'
import renderer from 'react-test-renderer'

import Tabs from '../Tabs'
import tabsConfig from '../sampleTabConfig'

describe('<Tabs />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<Tabs tabsConfig={tabsConfig} slideIndex={1} />)
    expect(tree).toMatchSnapshot()
  })
})
