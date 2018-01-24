// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Car from 'material-ui/svg-icons/maps/directions-car'

import { wrapWithMaterialUIContext, theme } from '../../../../utils/wrapWithContext'

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
    const tree = renderer.create(wrapWithMaterialUIContext(<QuickFilter {...props} />))
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('<QuickFilter /> calling should return quick Filter name', () => {
    const tree = shallow(<QuickFilter {...props} />, { context: { muiTheme: theme } })
    tree.find('div[className="QuickFilter"]').prop('onClick')()
    expect(props.onQuickFiltersChange).toHaveBeenCalled()
    expect(props.onQuickFiltersChange).toHaveBeenCalledWith('quickFilter')
  })
})
