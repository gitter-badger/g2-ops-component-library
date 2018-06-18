import React from 'react'
import { mount } from 'enzyme'
import {PhoneNumber} from '../PhoneNumber'
import toJSON from 'enzyme-to-json'

describe('<PhoneNumber />', () => {
  test('should render properly for various country codes', () => {
    const countries = [ 'US', 'UK', 'IR', 'ME', 'CA', 'DE', 'ES', 'IN', 'GB' ]
    countries.forEach((countryCode) => {
      const tree = mount(<PhoneNumber label={'Phone Field'} disabled={false} countryCode={countryCode} />)
      expect(toJSON(tree)).toMatchSnapshot()
    })
  })

  test('should render properly with value set', () => {
    const tree = mount(
      <PhoneNumber label={'Phone Field'} disabled={false} countryCode={'de'} value={'779384741'} />
    )
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
