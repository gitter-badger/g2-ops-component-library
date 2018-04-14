import React from 'react'
import renderer from 'react-test-renderer'

import Loader from '../Loader'

describe('<Loader />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<Loader />)
    expect(tree).toMatchSnapshot()
  })
})
