// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Car from 'material-ui/svg-icons/maps/directions-car'

import { wrapMuiContext, copartBaseTheme } from '../../../../wrapMuiContext'

import QuickFilters from '../quick-filters.component'

describe('<QuickFilters />', () => {
  let props
  beforeEach(() => {
    props = {
      quickFilters: [
        {
          name: 'quickFilterOne',
          label: 'Quick Filter One',
          count: 200,
          icon: <Car />,
        },
        {
          name: 'quickFilterTwo',
          label: 'Quick Filter',
          count: 200,
          icon: <Car />,
        },
      ],
      selectedQuickFilter: 'quickFilterOne',
      onQuickFiltersChange: jest.fn(),
    }
  })

  test('<QuickFilters /> renders properly', () => {
    const tree = renderer.create(wrapMuiContext(<QuickFilters {...props} />))
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('<QuickFilters /> should change active filter', () => {
    const tree = shallow(<QuickFilters {...props} />, { context: { muiTheme: copartBaseTheme } })
    expect(tree.state('selectedQuickFilter')).toBe('quickFilterOne')
    expect(
      tree
        .find('QuickFilter')
        .at(1)
        .prop('onQuickFiltersChange')('quickFilterTwo')
    )
    expect(tree.state('selectedQuickFilter')).toBe('quickFilterTwo')
  })
})
