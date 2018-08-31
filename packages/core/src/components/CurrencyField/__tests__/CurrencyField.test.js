import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CurrencyField } from '../CurrencyField'
import companyCodeMapper from '../countryMapper'

describe('<CurrencyField />', () => {
  test('should render properly', () => {
    const countries = [ 'US', 'UK', 'IR', 'ME', 'CA', 'DE', 'ES', 'IN', 'GB' ]
    countries.forEach((countryCode) => {
      const tree = mount(
        <CurrencyField
          label='Currency Field'
          disabled={false}
          countryCode={countryCode}
          placeholder={companyCodeMapper(countryCode).placeHolder}
          maxValue={99.99}
        />,
      )
      expect(toJSON(tree)).toMatchSnapshot()
    })
  })

  test('should throw error when maxValue is reached', () => {
    const countryCodeErrorMap = {
      DE: 'Max Limit 99,99\u00a0€',
      US: 'Max Limit $99.99',
      UK: 'Max Limit £99.99',
      IR: 'Max Limit €99.99',
      CA: 'Max Limit CAD\u00a099.99',
      IN: 'Max Limit ₹\u00a099.99',
      GB: 'Max Limit £99.99',
    }

    Object.entries(countryCodeErrorMap).forEach(([countryCode, expected]) => {
      const tree = mount(
        <CurrencyField
          label='Currency Field'
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
      
      expect(tree.state('errorMessage')).toBe(expected)
    })
  })

  test('should return formatted currency value when entered value < maxValue', () => {
    const countryCodeErrorMap = {
      DE: [ '100.000,00\u00a0€', '100000' ],
      US: [ '$100,000.00', '100000' ],
      UK: [ '£100,000.00', '100000' ],
      IR: [ '€100,000.00', '100000' ],
      CA: [ 'CAD\u00a0100,000.00', '100000' ],
      IN: [ '₹\u00a01,00,000.00', '100000' ],
      GB: [ '£100,000.00', '100000' ],
    }
    Object.entries(countryCodeErrorMap).forEach(([countryCode, expected]) => {
      const onBlur = jest.fn()

      const tree = mount(
        <CurrencyField
          label='Currency Field'
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
            value: expected[1],
          },
        })
      
      expect(onBlur).toHaveBeenCalledWith(expected[0], expected[1])
    })
  })

  test('should display errorMessage onBlur when value entered > maxValue', () => {
    const countryCodeErrorMap = {
      DE: [ 'Max Limit 9.999,99\u00a0€', '100000' ],
      US: [ 'Max Limit $9,999.99', '100000' ],
      UK: [ 'Max Limit £9,999.99', '100000' ],
      IR: [ 'Max Limit €9,999.99', '100000' ],
      CA: [ 'Max Limit CAD\u00a09,999.99', '100000' ],
      IN: [ 'Max Limit ₹\u00a09,999.99', '100000' ],
      GB: [ 'Max Limit £9,999.99', '100000' ],
    }

    Object.entries(countryCodeErrorMap).forEach(([countryCode, expected]) => {
      const onBlur = jest.fn()
  
      const tree = mount(
        <CurrencyField
          label='Currency Field'
          disabled={false}
          countryCode={countryCode}
          placeholder={companyCodeMapper(countryCode).placeHolder}
          maxValue={9999.99}
          onBlur={onBlur}
        />,
      )

      tree
        .find('TextField')
        .at(0)
        .prop('onBlur')({
          currentTarget: {
            value: expected[1],
          },
        })
      
      expect(tree.state('errorMessage')).toBe(expected[0])
    })
  })

  test('should display error message when un supported country is selected', () => {
    const countryToErrorMessage = {
      US: '',
      ZI: 'Please enter/send a valid country',
    }

    Object.entries(countryToErrorMessage).forEach(([countryCode, expected]) => {
      const tree = mount(
        <CurrencyField label='Currency Field' disabled={false} countryCode={countryCode} maxValue={99.99} />,
      )

      expect(tree.state('errorMessage')).toBe(expected)
    })
  })
})
