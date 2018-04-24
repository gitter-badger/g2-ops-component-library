import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utilities/wrapWithContext'

import {Divider} from '../'

describe('<Divider />', () => {
  test('should render properly', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<Divider />))
    expect(tree).toMatchSnapshot()
  })
})
