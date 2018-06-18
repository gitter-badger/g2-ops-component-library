import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utilities/wrapWithContext'

import {Button} from '../Button'

// This is also a wrapper around MaterialUI. Added snapshots, to track how these things change over time
describe('<Button />', () => {
  test('should render properly', () => {
    const variants = [ 'primary', 'secondary', 'inactive', 'add', 'edit', 'delete' ]
    variants.forEach((variant) => {
      const tree = renderer.create(wrapWithMaterialUIContext(<Button variant={variant} />))
      expect(tree).toMatchSnapshot()
    })
  })
})
