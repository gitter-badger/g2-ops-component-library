import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import Card from '../Card'

describe('<Card />', () => {
  test('should render properly with children', () => {
    const tree = renderer.create(
      wrapWithMaterialUIContext(
        <Card>
          <div className="cardChildren" />
        </Card>,
      ),
    )
    expect(tree).toMatchSnapshot()
  })
})
