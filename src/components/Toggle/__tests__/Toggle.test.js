import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import Toggle from '../Toggle'

// Issue exists with material-ui/Toggle for testing
jest.mock('material-ui/internal/EnhancedSwitch', () => () => <div className="EnhanceSwitch" />)

describe('<Toggle />', () => {
  test('should render properly', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<Toggle label="Toggle" />))
    expect(tree).toMatchSnapshot()
  })
})
