import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utilities/wrapWithContext'

import {Chip} from '../Chip'

describe('<Chip />', () => {
  test('should render properly', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<Chip>Sample Chip</Chip>))
    expect(tree).toMatchSnapshot()
  })
})
