import React from 'react'
import renderer from 'react-test-renderer'

import {TextField} from '../TextField'

// This test case is just a placeholder nothing adding much. As we are not doing anything in it. We are adding wrapper around Fabric TextField
describe('<TextField />', () => {
  test('<TextField /> should render properly', () => {
    const tree = renderer.create(<TextField />)
    expect(tree).toMatchSnapshot()
  })
})
