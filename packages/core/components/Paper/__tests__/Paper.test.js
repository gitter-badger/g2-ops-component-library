import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import Paper from '../Paper'

describe('<Paper />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<Paper />)
    expect(tree).toMatchSnapshot()
  })
})
