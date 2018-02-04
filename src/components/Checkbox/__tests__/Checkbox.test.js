import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import Checkbox from '../Checkbox'

describe('<Checkbox />', () => {
  test('should render properly', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<Checkbox label="Custom Label" />))
    expect(tree).toMatchSnapshot()
  })
})
