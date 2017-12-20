import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import formatCurrency, { stripDownCurrency } from './currencyUtils'
import { serialize } from './formatCurrency'
import companyCodeMapper from './countryMapper'
import { wrapMuiContext } from '../../wrapMuiContext'

const getDelimiter = countryCode => (countryCode.toUpperCase() === 'IN' ? '.' : ',')
const isBlank = (val) => val == null || (typeof val === 'string' && !val.trim().length)
const CASCountry = ['US', 'UK', 'CA', 'IR', 'ME', 'GB']
const GlobalCountry = ['DE', 'ES', 'IN']
const formatValue = (country, value, currencyStyle) => formatCurrency(
  country,
  value || 0.00,
  currencyStyle,
)

class CurrencyField extends Component {
  constructor(props) {
    super(props)
    const { value, countryCode } = props
    const country = countryCode.toUpperCase()
    
    const companyMapper = companyCodeMapper(country.toUpperCase() || 'US')
    let errorMessage = '', displayedValue = 0.00, currency = 'USD', locale = 'en-US'

    if (!(GlobalCountry.includes(country) || CASCountry.includes(country))) {
      errorMessage = 'Please enter/send a valid country'
    } else {
      currency = companyMapper && companyMapper.currency
      locale = companyMapper && companyMapper.locale
      displayedValue = isBlank(value, currency) ? '' : formatCurrency(country, value, currency, locale)
    }

    this.state = {
      errorMessage,
      value: value || 0,
      displayedValue,
      currency,
      locale,
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.hasOwnProperty('value') && document.activeElement !== this.textField.input) {
  //     const { locale, currency } = this.state
  //     const displayedValue = isBlank(nextProps.value) ? '' : formatCurrency(nextProps.value, currency, locale)
  //     this.setState({ value: nextProps.value, displayedValue })
  //   }
  // }

  onBlur = e => {
    const input = e.target.value
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

  handleChange = input => {
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

    if (Number(displayedValue) <= this.props.maxValue) {
      this.setState({ errorMessage: '' })
      this.setState({ displayedValue })
      // calling handle change from props if its there
      if (this.props.handleChange) {
        this.props.handleChange(event, displayedValue)
      }
    } else {
      this.setState({ errorMessage: `Max Limit $${maxValue}` })
    }
  }

  serialize = value => serialize(this.props.countryCode, value)

  render() {
    const {
      onChange,
      ...restProps
    } = this.props
    return (
      <div>
        <TextField
          {...restProps}
          ref={elem => {this.textField = elem}}
          value={this.state.displayedValue}
          onChanged={this.handleChange}
          onBlur={this.onBlur}
          onFocus={(e) => this.handleChange(e.target.value)}
          errorMessage={this.state.errorMessage}
        />
        <input type="hidden"
          name={this.props.name}
          required={this.props.required}
          value={this.state.value}
          />
      </div>
    )
  }
}
CurrencyField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  countryCode: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
}
export default wrapMuiContext(CurrencyField)