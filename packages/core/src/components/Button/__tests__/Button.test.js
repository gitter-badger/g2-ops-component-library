import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utilities/wrapWithContext'

import {Button} from '../Button'

// This is also a wrapper around MaterialUI. Added snapshots, to track how these things change over time
describe('<Button />', () => {
  test('should render properly', () => {
    const buttonTypes = [ 'primary', 'secondary', 'inactive', 'add', 'edit', 'delete' ]
    buttonTypes.forEach((type) => {
      const tree = renderer.create(wrapWithMaterialUIContext(<Button type={type} />))
      expect(tree).toMatchSnapshot()
    })
  })
})
