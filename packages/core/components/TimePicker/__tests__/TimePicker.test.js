import React from 'react'
import renderer from 'react-test-renderer'

import {TimePicker} from '../TimePicker'

describe('<TimePicker />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<TimePicker hintText="12hr Format with auto ok" autoOk id="time-picker" />)
    expect(tree).toMatchSnapshot()
  })
})
