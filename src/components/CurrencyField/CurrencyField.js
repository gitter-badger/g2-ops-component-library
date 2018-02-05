// @flow
import type { Node, ComponentType } from 'react'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'components/TextField'
import formatCurrency, { stripDownCurrency, serialize } from './currencyUtils'
import companyCodeMapper from './countryMapper'

const getDelimiter = (countryCode) => (countryCode.toUpperCase() === 'IN' ? '.' : ',')
const isBlank = (val) => val == null || (typeof val === 'string' && !val.trim().length)
const CASCountry = [ 'US', 'UK', 'CA', 'IR', 'ME', 'GB' ]
const GlobalCountry = [ 'DE', 'ES', 'IN' ]
const formatValue = (country, value, currencyStyle) => formatCurrency(country, value || 0.0, currencyStyle)

type CurrencyFieldPropTypes = {
  name: string,
  value: number | string,
  label: string,
  countryCode: string,
  disabled: boolean,
  required: boolean,
  onChange: (SyntheticKeyboardEvent<HTMLInputElement>, ?string) => void,
  handleChange: (string) => void,
  onBlur: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  maxValue: number,
}

type CurrencyFieldStateType = {
  errorMessage: string,
  value: number | string,
  displayedValue: ?string,
  currency: string,
  locale: string,
}

class CurrencyField extends Component<CurrencyFieldPropTypes, CurrencyFieldStateType> {
  textField: Node // eslint-disable-line
  constructor(props: CurrencyFieldPropTypes) {
    super(props)
    const { value, countryCode } = props
    const country = countryCode.toUpperCase()
    const companyMapper = companyCodeMapper(country.toUpperCase() || 'US')
    let errorMessage = ''
    let displayedValue = '0.00'
    let currency = 'USD'
    let locale = 'en-US' // eslint-disable-line

    if (!(GlobalCountry.includes(country) || CASCountry.includes(country))) {
      errorMessage = 'Please enter/send a valid country'
    } else {
      currency = companyMapper && companyMapper.currency
      locale = companyMapper && companyMapper.locale
      displayedValue = isBlank(value) ? '' : formatCurrency(country, value, currency, locale)
    }

    this.state = {
      errorMessage,
      value,
      displayedValue,
      currency,
      locale,
    }
  }

  onBlur = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value
    const { currency, locale } = this.state
    const { countryCode, maxValue } = this.props
    const country = countryCode.toUpperCase()

    const inputFieldIsBlank = isBlank(input)
    let replacedValue = ''

    if (CASCountry.includes(country)) {
      replacedValue = stripDownCurrency(country, input).replace(/[a-zA-Z,$#\^&*\(\)@!]+/, '') || 0
      if (replacedValue && replacedValue !== '' && replacedValue !== '0.00' && replacedValue !== '.') {
        if (+replacedValue <= maxValue) {
          this.setState({ displayedValue: formatValue(country, replacedValue, currency), value: replacedValue })
        } else {
          this.setState({ displayedValue: formatValue(country, maxValue, currency), value: replacedValue })
        }
      } else {
        this.setState({ displayedValue: formatValue(country, 0, currency), value: replacedValue })
      }
      if (this.props.onBlur) {
        this.props.onBlur(e)
      }
    } else {
      replacedValue = inputFieldIsBlank ? '' : Number(serialize(country, input)).toFixed(2)
      this.setState({
        displayedValue: inputFieldIsBlank ? null : formatCurrency(country, replacedValue, currency, locale),
        value: replacedValue,
      })
      if (this.props.onChange) {
        this.props.onChange(e, replacedValue)
      }
    }
  }

  handleChange = (input: string) => {
    const { countryCode, maxValue } = this.props
    const country = countryCode.toUpperCase()

    if (!(GlobalCountry.includes(country) || CASCountry.includes(country))) {
      this.setState({ errorMessage: 'Not a valid country' })
      return
    }
    const delimiter = getDelimiter(country)
    const displayedValue = CASCountry.includes(country)
      ? stripDownCurrency(country, input)
      : input.replace(/\D/g, (match) => (match === delimiter ? delimiter : ''))

    this.setState({ displayedValue })

    if (Number(displayedValue.replace(/\D/g, '')) <= Number(String(maxValue).replace(/\D/g, ''))) {
      this.setState({ errorMessage: '' })
      this.setState({ displayedValue })
      // calling handle change from props if its there
      if (this.props.handleChange) {
        this.props.handleChange(displayedValue || '')
      }
    } else {
      this.setState({ errorMessage: `Max Limit ${formatCurrency(countryCode, maxValue, this.state.currency)}` })
    }
  }

  render() {
    const { onChange, disabled, ...restProps } = this.props
    return (
      <div>
        <TextField
          {...restProps}
          disabled={disabled}
          ref={(elem) => {
            this.textField = elem
          }}
          value={this.state.displayedValue}
          onChanged={this.handleChange}
          onBlur={this.onBlur}
          onFocus={(e) => this.handleChange(e.target.value)}
          errorMessage={this.state.errorMessage}
        />
        <input type="hidden" name={this.props.name} required={this.props.required} value={this.state.value} />
      </div>
    )
  }
}

export default CurrencyField
