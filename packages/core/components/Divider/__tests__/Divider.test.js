import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import {Divider} from '../'

describe('<Divider />', () => {
  test('should render properly', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<Divider />))
    expect(tree).toMatchSnapshot()
  })
})
