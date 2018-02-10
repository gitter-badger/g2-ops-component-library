import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import CurrencyField from '../CurrencyField'
import companyCodeMapper from '../countryMapper'

describe('<CurrencyField />', () => {
  test('should render properly', () => {
    const countries = [ 'US', 'UK', 'IR', 'ME', 'CA', 'DE', 'ES', 'IN', 'GB' ]
    countries.forEach((countryCode) => {
      const tree = renderer.create(
        <CurrencyField
          label={'Currency Field'}
          disabled={false}
          countryCode={countryCode}
          placeholder={companyCodeMapper(countryCode).placeHolder}
          maxValue={99.99}
        />,
      )
      expect(tree).toMatchSnapshot(tree)
    })
  })

  test('should throw error when maxValue is reached', () => {
    const countryCodeErrorMap = {
      DE: 'Max Limit € 99.99',
      US: 'Max Limit $99.99',
      UK: 'Max Limit £99.99',
      IR: 'Max Limit €99.99',
      CA: 'Max Limit CAD99.99',
      IN: 'Max Limit ₹99.99',
      GB: 'Max Limit £99.99',
    }
    Object.keys(countryCodeErrorMap).forEach((countryCode) => {
      const tree = mount(
        <CurrencyField
          label={'Currency Field'}
          disabled={false}
          countryCode={countryCode}
          placeholder={companyCodeMapper(countryCode).placeHolder}
          maxValue={99.99}
        />,
      )
      tree
        .find('TextField')
        .at(0)
        .prop('onChanged')('100.00')
      expect(tree.state('errorMessage')).toBe(countryCodeErrorMap[countryCode])
    })
  })

  test.skip('should return formatted currency value when entered value < maxValue', () => {
    const countryCodeErrorMap = {
      DE: 'Max Limit € 99.99',
      US: 'Max Limit $99.99',
      UK: 'Max Limit £99.99',
      IR: 'Max Limit €99.99',
      CA: 'Max Limit CAD99.99',
      IN: 'Max Limit ₹99.99',
      GB: 'Max Limit £99.99',
    }
    Object.keys(countryCodeErrorMap).forEach((countryCode) => {
      const onBlur = jest.fn()
      const tree = mount(
        <CurrencyField
          label={'Currency Field'}
          disabled={false}
          countryCode={countryCode}
          placeholder={companyCodeMapper(countryCode).placeHolder}
          maxValue={999999999.99}
          onBlur={onBlur}
        />,
      )
      tree
        .find('TextField')
        .at(0)
        .prop('onBlur')({
          currentTarget: {
            value: '10000000.00',
          },
        })
      expect(onBlur).toHaveBeenCalledWith('')
    })
  })
})
