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

type CurrencyFieldPropTypes = {
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

type CurrencyFieldStateType = {
  errorMessage: string,
  displayedValue: string,
}

const validateInputValueAndReturnErrorMessage = (
  props: Object, currencyValue: string = ''
): CurrencyFieldStateType => {
  const { countryCode, maxValue } = props
  if (!countriesSupported.includes(countryCode)) {
    return {
      displayedValue: currencyValue,
      errorMessage: 'Please enter/send a valid country',
    }
  } else {
    const country = companyCodeMapper(countryCode)
    const formattedCurrency = formatCurrency(countryCode, currencyValue.toString(), country.currency)
    if (Number(currencyValue) > maxValue) {
      return {
        displayedValue: formattedCurrency,
        errorMessage: `Max Limit ${formatCurrency(countryCode, maxValue.toString(), country.currency)}`,
      }
    } else {
      return {
        displayedValue: formattedCurrency,
        errorMessage: '',
      }
    }
  }
}

const arePropValuesNotEqual = (
  nextProps: any,
  props: any,
  properties: Array<string> = ['maxValue', 'countryCode', 'value'],
): boolean => !equals(pick(properties, nextProps), pick(properties, props))

export class CurrencyField extends Component<CurrencyFieldPropTypes, CurrencyFieldStateType> {
  static defaultProps = {
    countryCode: 'US',
    value: '',
  }

  constructor(props: CurrencyFieldPropTypes) {
    super(props)
    const { value, countryCode } = this.props
    const valueFromProps = value.toString()
    this.state = validateInputValueAndReturnErrorMessage(this.props, valueFromProps)
  }

  componentWillReceiveProps(nextProps: CurrencyFieldPropTypes) {
    if (arePropValuesNotEqual(nextProps, this.props)) {
      const { countryCode, value } = nextProps
      const valueFromProps = value.toString()
      this.setState(prevState => ({
        ...prevState,
        ...validateInputValueAndReturnErrorMessage(nextProps, valueFromProps),
      }))
    }
  }

  onBlur = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    let currencyValue = value
    const { countryCode } = this.props
    if (!isBlank(value)) {
      currencyValue = CASCountry.includes(countryCode)
        ? stripDownCurrency(countryCode, value).replace(/[a-zA-Z,$#^&*()@!]+/, '') || 0
        : serialize(countryCode, value)
    }
    const validatedInput = validateInputValueAndReturnErrorMessage(this.props, currencyValue.toString())
    this.setState(prevState => ({
      ...prevState,
      ...validatedInput,
      displayedValue: validatedInput.displayedValue,
    }), () => {
      if (this.props.onBlur) {
        const { displayedValue } = this.state
        this.props.onBlur(displayedValue, currencyValue.toString()) // To be consistent we return both strings
      }
    })
  }

  onChange = (value: string) => {
    const { countryCode } = this.props
    let currencyValue = value
    if (!isBlank(value)) {
      currencyValue = CASCountry.includes(countryCode)
        ? stripDownCurrency(countryCode, value).replace(/[a-zA-Z,$#^&*()@!]+/, '') || 0
        : serialize(countryCode, value)
    }
    const validatedInput = validateInputValueAndReturnErrorMessage(this.props, currencyValue.toString())
    if (countriesSupported.includes(countryCode)) {
      const country = companyCodeMapper(countryCode)
      const delimiter = country.delimiter
      currencyValue = value.replace(/\D/g, match => (match === delimiter ? delimiter : ''))
    }
    this.setState(prevState => ({
      ...prevState,
      ...validatedInput,
      displayedValue: currencyValue.toString(),
    }))
  }

  onFocus = (value: string) => {
    // Triggered when the user focuses onto the field for the first time
    const { countryCode } = this.props
    const country = companyCodeMapper(countryCode)
    const delimiter = country.delimiter
    const currencyValue = value.replace(/\D/g, match => (match === delimiter ? delimiter : ''))
    this.setState({
      displayedValue: currencyValue.toString(),
      errorMessage: '',
    })
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
          onFocus={e => this.onFocus(e.target.value)}
          errorMessage={this.state.errorMessage}
        />
        <input type="hidden" name={this.props.name} required={this.props.required} value={this.state.displayedValue} />
      </div>
    )
  }
}


