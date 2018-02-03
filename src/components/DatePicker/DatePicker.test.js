/* eslint-env mocha */
import React from 'react'
import { shallow } from 'enzyme'
import DatePicker from './DatePicker'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

describe('<DatePicker />', () => {
  const muiTheme = getMuiTheme()
  const shallowWithContext = node => shallow(node, { context: { muiTheme } })
  test('Tests are required', () => {
    expect(true).toBeTruthy()
  })
})
