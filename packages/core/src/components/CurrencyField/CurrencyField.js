// @flow
import type { Node, ComponentType } from 'react'

import React, { Component } from 'react'
import { TextField } from 'components/TextField'
import { pick, equals } from 'ramda'

import formatCurrency, { stripDownCurrency, serialize } from './currencyUtils'
import companyCodeMapper from './countryMapper'

const getDelimiter = countryCode => (countryCode.toUpperCase() === 'IN' ? '.' : ',')
const isBlank = val => val == null || (typeof val === 'string' && !val.trim().length)
const CASCountry = ['US', 'UK', 'CA', 'IR', 'ME', 'GB']
const GlobalCountry = ['DE', 'ES', 'IN']
const countriesSupported = [...CASCountry, ...GlobalCountry]

type CurrencyFieldPropsT = {
  name: string,
  value: number | string,
  label: string,
  countryCode: 'US' | 'UK' | 'CA' | 'IR' | 'ME' | 'GB' | 'DE' | 'ES' | 'IN',
  disabled: boolean,
  required: boolean,
  onChange: (string, string) => void,
  onBlur: (string, string) => void,
  maxValue: number,
}

type CurrencyFieldValidationType = {
  errorMessage: string,
  formattedValue: string,
  displayedValue: string,
}

type CurrencyFieldStateT = {
  errorMessage: string,
  formattedValue: string,
  displayedValue: string,
}

const validateInputValueAndReturnErrorMessage = (
  value: string,
  countryCode: string,
  maxValue: number,
): CurrencyFieldStateT => {
  if (!countriesSupported.includes(countryCode)) {
    return {
      formattedValue: value,
      displayedValue: value,
      errorMessage: 'Please enter/send a valid country',
    }
  } else {
    const country = companyCodeMapper(countryCode)
    let currencyValue = ''
    if (!isBlank(value)) {
      currencyValue = CASCountry.includes(countryCode)
        ? stripDownCurrency(countryCode, value).replace(/[a-zA-Z,$#^&*()@!]+/, '') || 0
        : serialize(countryCode, value)
    }
    const formattedCurrency = formatCurrency(countryCode, currencyValue.toString(), country.currency)
    if (Number(currencyValue) > maxValue) {
      return {
        formattedValue: formattedCurrency,
        displayedValue: currencyValue.toString(),
        errorMessage: `Max Limit ${formatCurrency(countryCode, maxValue.toString(), country.currency)}`,
      }
    } else {
      return {
        formattedValue: formattedCurrency,
        displayedValue: currencyValue.toString(),
        errorMessage: '',
      }
    }
  }
}

const arePropValuesEqual = (
  nextProps: any,
  props: any,
  properties: Array<string> = ['maxValue', 'countryCode', 'value'],
): boolean => !equals(pick(properties, nextProps), pick(properties, props))

export class CurrencyField extends Component<CurrencyFieldPropsT, CurrencyFieldStateT> {
  static defaultProps = {
    countryCode: 'US',
    value: '',
  }

  constructor(props: CurrencyFieldPropsT) {
    super(props)
    const { value, countryCode, maxValue } = props
    this.state = validateInputValueAndReturnErrorMessage(value.toString(), countryCode, maxValue)
  }

  componentWillReceiveProps(nextProps: CurrencyFieldPropsT) {
    if (arePropValuesEqual(nextProps, this.props)) {
      const { value, countryCode, maxValue } = nextProps
      this.setState(prevState => ({
        ...prevState,
        ...validateInputValueAndReturnErrorMessage(value.toString(), countryCode, maxValue),
      }))
    }
  }

  onBlur = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const { countryCode, maxValue } = this.props
    const value = e.currentTarget.value
    const validatedInput = validateInputValueAndReturnErrorMessage(value, countryCode, maxValue)
    this.setState(prevState => ({
      ...prevState,
      ...validatedInput,
      displayedValue: validatedInput.formattedValue,
    }))
    if (this.props.onBlur) {
      const { formattedValue, displayedValue } = this.state
      this.props.onBlur(formattedValue, validatedInput.displayedValue.toString()) // To be consistent we return both strings
    }
  }

  onChange = (value: string) => {
    const { countryCode, maxValue } = this.props
    const validatedInput = validateInputValueAndReturnErrorMessage(value, countryCode, maxValue)
    let currencyValue = validatedInput.displayedValue
    if (countriesSupported.includes(countryCode)) {
      const country = companyCodeMapper(countryCode)
      const delimiter = country.delimiter
      currencyValue = value.replace(/\D/g, match => (match === delimiter ? delimiter : ''))
    }
    this.setState(prevState => ({
      ...prevState,
      ...validatedInput,
      displayedValue: currencyValue,
    }))
    if (this.props.onChange) {
      const { formattedValue, displayedValue } = this.state
      this.props.onChange(formattedValue, displayedValue)
    }
  }

  render() {
    const { onChange, disabled, ...restProps } = this.props
    return (
      <div>
        <TextField
          {...restProps}
          disabled={disabled}
          value={this.state.displayedValue}
          onChanged={this.onChange}
          onBlur={this.onBlur}
          onFocus={e => this.onChange(e.target.value)}
          errorMessage={this.state.errorMessage}
        />
        <input type="hidden" name={this.props.name} required={this.props.required} value={this.state.formattedValue} />
      </div>
    )
  }
}


