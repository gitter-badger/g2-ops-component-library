import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import {PhoneNumber} from '../PhoneNumber'

describe('<PhoneNumber />', () => {
  test('should render properly for various country codes', () => {
    const countries = [ 'US', 'UK', 'IR', 'ME', 'CA', 'DE', 'ES', 'IN', 'GB' ]
    countries.forEach((countryCode) => {
      const tree = renderer.create(<PhoneNumber label={'Phone Field'} disabled={false} countryCode={countryCode} />)
      expect(tree).toMatchSnapshot(tree)
    })
  })

  test('should render properly with value set', () => {
    const tree = renderer.create(
      <PhoneNumber label={'Phone Field'} disabled={false} countryCode={'de'} value={'779384741'} />
    )
    expect(tree).toMatchSnapshot(tree)
  })
})
