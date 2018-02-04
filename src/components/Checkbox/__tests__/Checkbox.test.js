import React from 'react'
import renderer from 'react-test-renderer'

import Checkbox from '../Checkbox'

describe('<Checkbox />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<Checkbox label="Custom Label" />)
    expect(tree).toMatchSnapshot()
  })
})
