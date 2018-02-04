import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import BottomNavigation from '../BottomNavigation'

// Nothing added here as it is just wrapper around MaterialBottomNavigation
describe('<BottomNavigation />', () => {
  test('should render properly with no children', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<BottomNavigation />))
    expect(tree).toMatchSnapshot()
  })

  test('should render properly with children', () => {
    const tree = renderer.create(
      wrapWithMaterialUIContext(
        <BottomNavigation>
          <div className="bottomNavigationChildren" />
        </BottomNavigation>,
      ),
    )
    expect(tree).toMatchSnapshot()
  })
})
