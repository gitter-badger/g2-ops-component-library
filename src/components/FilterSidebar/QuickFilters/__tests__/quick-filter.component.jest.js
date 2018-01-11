// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Car from 'material-ui/svg-icons/maps/directions-car'

import { wrapMuiContext, copartBaseTheme } from '../../../../wrapMuiContext'

import QuickFilter from '../quick-filter.component'

describe('<QuickFilter />', () => {
  let props = null
  beforeEach(() => {
    props = {
      quickFilter: {
        name: 'quickFilter',
        label: 'Quick Filter',
        count: 200,
        icon: <Car />,
      },
      onQuickFiltersChange: jest.fn(),
    }
  })
  test('<QuickFilter /> rendered properly', () => {
    const tree = renderer.create(wrapMuiContext(<QuickFilter {...props} />))
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('<QuickFilter /> calling should return quick Filter name', () => {
    const tree = shallow(<QuickFilter {...props} />, { context: { muiTheme: copartBaseTheme } })
    tree.find('div[className="QuickFilter"]').prop('onClick')()
    expect(props.onQuickFiltersChange).toHaveBeenCalled()
    expect(props.onQuickFiltersChange).toHaveBeenCalledWith('quickFilter')
  })
})
