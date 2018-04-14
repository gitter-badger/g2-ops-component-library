import React from 'react'
import { mount, shallow } from 'enzyme'
import moment from 'moment'
import renderer from 'react-test-renderer'

import DatePicker from '../DatePicker'
import { isSameOrBeforeMaxDate, isSameOrAfterMinDate, getDateObject } from '../dateUtils'

const getProps = (props = {}) => {
  const { defaultFormat = 'DD/MM/YYYY', ...extraProps } = props
  return {
    autoOk: true,
    placeholder: defaultFormat,
    hintText: defaultFormat,
    container: 'inline',
    style: { maxWidth: '300px' },
    label: 'Select Date',
    defaultFormat,
    formatDate: (date) => moment(date, defaultFormat).format(defaultFormat),
    ...extraProps,
  }
}

describe('<DatePicker />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<DatePicker {...getProps()} />)
    expect(tree).toMatchSnapshot()
  })

  test('should render when value prop passed', () => {
    const datePickerProps = getProps({ value: new Date('2017-10-26T12:00:00.000Z') })
    const tree = renderer.create(<DatePicker {...datePickerProps} />)
    expect(tree).toMatchSnapshot()
  })
})

describe('Sets state when user enters date', () => {
  let textField = null
  let datePicker = null
  beforeEach(() => {
    const defaultFormat = 'DD/MM/YYYY'
    const tree = mount(<DatePicker {...getProps()} />)
    textField = tree.find('TextField').at(0)
    datePicker = tree
      .find('DatePicker')
      .at(0)
      .instance()
  })
  test('should set state when user enters Date', () => {
    textField.prop('onChanged')('020')
    expect(datePicker.state.displayDate).toBe('02/0')

    textField.prop('onChanged')('02/031')

    expect(datePicker.state.displayDate).toBe('02/03/1')

    textField.prop('onChanged')('02/03/1991')

    expect(datePicker.state.displayDate).toBe('02/03/1991')
    expect(datePicker.state.date.toISOString()).toBe('1991-03-02T12:00:00.000Z')
  })

  test('should set errorMessage when user enters Invalid Date', () => {
    textField.prop('onChanged')('22/22/2222')
    expect(datePicker.state.displayDate).toBe('22/22/2222')
    expect(datePicker.state.date).toBe(null)
    expect(datePicker.state.errorMessage).toBe('Invalid date entered')
  })

  test('should set errorMessage when user enters date after Max Date', () => {
    textField.prop('onChanged')('02/03/2128')
    expect(datePicker.state.displayDate).toBe('02/03/2128')
    expect(datePicker.state.errorMessage).toContain('Date cannot be after')
  })

  test('should set errorMessage when user enters date before Min Date', () => {
    textField.prop('onChanged')('02/03/1917')
    expect(datePicker.state.displayDate).toBe('02/03/1917')
    expect(datePicker.state.errorMessage).toContain('Date cannot be before')
  })
})

describe('DatePicker Utils', () => {
  test('getDateObject converts entered date', () => {
    const dateObject = getDateObject('14/02/2018', 'DD/MM/YYYY')
    expect(dateObject.toISOString()).toBe('2018-02-14T12:00:00.000Z')
  })

  test('isSameOrAfterMinDate validates entered Date against MinDate', () => {
    const defaultFormat = 'DD/MM/YYYY'
    const minDate = moment('04/02/2018', defaultFormat)
      .startOf('day')
      .toDate()
    expect(isSameOrAfterMinDate('02/14/2018', minDate, defaultFormat)).toBe('')
    expect(isSameOrAfterMinDate('02/04/2018', minDate, defaultFormat)).toBe('')
    expect(isSameOrAfterMinDate('02/03/2018', minDate, defaultFormat)).not.toBe('')
  })

  test('isSameOrBeforeMaxDate validates entered Date against MaxDate', () => {
    const defaultFormat = 'DD/MM/YYYY'
    const maxDate = moment('24/02/2018', defaultFormat)
      .startOf('day')
      .toDate()
    expect(isSameOrBeforeMaxDate('02/14/2018', maxDate, defaultFormat)).toBe('')
    expect(isSameOrBeforeMaxDate('02/24/2018', maxDate, defaultFormat)).toBe('')
    expect(isSameOrBeforeMaxDate('02/25/2018', maxDate, defaultFormat)).not.toBe('')
  })
})
