import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import {CurrencyField} from '../CurrencyField'
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

  test('should return formatted currency value when entered value < maxValue', () => {
    const countryCodeErrorMap = {
      DE: [ '€ 100,000.00', '100000' ],
      US: [ '$100,000.00', '100000' ],
      UK: [ '£100,000.00', '100000' ],
      IR: [ '€100,000.00', '100000' ],
      CA: [ 'CAD100,000.00', '100000' ],
      IN: [ '₹100,000.00', '100000' ],
      GB: [ '£100,000.00', '100000' ],
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
      const expectedOutput = countryCodeErrorMap[countryCode]
      tree
        .find('TextField')
        .at(0)
        .prop('onBlur')({
          currentTarget: {
            value: expectedOutput[1],
          },
        })
      expect(onBlur).toHaveBeenCalledWith(expectedOutput[0], expectedOutput[1])
    })
  })

  test('should display errorMessage onBlur when value entered > maxValue', () => {
    const countryCodeErrorMap = {
      DE: [ 'Max Limit € 9,999.99', '100000' ],
      US: [ 'Max Limit $9,999.99', '100000' ],
      UK: [ 'Max Limit £9,999.99', '100000' ],
      IR: [ 'Max Limit €9,999.99', '100000' ],
      CA: [ 'Max Limit CAD9,999.99', '100000' ],
      IN: [ 'Max Limit ₹9,999.99', '100000' ],
      GB: [ 'Max Limit £9,999.99', '100000' ],
    }
    Object.keys(countryCodeErrorMap).forEach((countryCode) => {
      const onBlur = jest.fn()
      const tree = mount(
        <CurrencyField
          label={'Currency Field'}
          disabled={false}
          countryCode={countryCode}
          placeholder={companyCodeMapper(countryCode).placeHolder}
          maxValue={9999.99}
          onBlur={onBlur}
        />,
      )
      const expectedOutput = countryCodeErrorMap[countryCode]
      tree
        .find('TextField')
        .at(0)
        .prop('onBlur')({
          currentTarget: {
            value: expectedOutput[1],
          },
        })
      expect(tree.state('errorMessage')).toBe(countryCodeErrorMap[countryCode][0])
    })
  })

  test('should display error message when un supported country is selected', () => {
    const countryToErrorMessage = {
      US: '',
      ZI: 'Please enter/send a valid country',
    }
    Object.keys(countryToErrorMessage).forEach((countryCode) => {
      const tree = mount(
        <CurrencyField label={'Currency Field'} disabled={false} countryCode={countryCode} maxValue={99.99} />,
      )
      expect(tree.state('errorMessage')).toBe(countryToErrorMessage[countryCode])
    })
  })
})
