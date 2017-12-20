import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import formatCurrency from './currencyUtils'
import { serialize } from './formatCurrency'
import companyCodeMapper from './countryMapper'
import { wrapMuiContext } from '../../wrapMuiContext'

const getDelimiter = countryCode => (countryCode.toUpperCase() === 'IN' ? '.' : ',')
const isBlank = (val) => val == null || (typeof val === 'string' && !val.trim().length)

class CurrencyField extends Component {
  constructor(props) {
    super(props)
    const { value, countryCode } = props
    const companyMapper = companyCodeMapper(countryCode.toUpperCase())
    const currency = companyMapper.currency
    const locale = companyMapper.locale
    const displayedValue = isBlank(value, currency) ? '' : formatCurrency(value, currency, locale)

    this.state = {
      errorText: '',
      value,
      displayedValue,
      currency,
      locale,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('value') && document.activeElement !== this.textField.input) {
      const { locale, currency } = this.state
      const displayedValue = isBlank(nextProps.value) ? '' : formatCurrency(nextProps.value, currency, locale)
      this.setState({ value: nextProps.value, displayedValue })
    }
  }

  onBlur = e => {
    const input = e.target.value
    const { currency, locale } = this.state
    const { countryCode } = this.props
    // check if the field is blank and if it is, updated the value properly
    const inputFieldIsBlank = isBlank(input)
    const replacedValue = inputFieldIsBlank ? '' : Number(serialize(countryCode, input)).toFixed(2)
    this.setState({
      displayedValue: inputFieldIsBlank ? null : formatCurrency(replacedValue, currency, locale),
      value: replacedValue,
    })
    if (this.props.onChange) {
      this.props.onChange(e, replacedValue)
    }
  }

  handleChange = input => {
    const delimiter = getDelimiter(this.props.countryCode)
    const displayedValue = input.replace(/\D/g, match => (match === delimiter ? delimiter : ''))
    this.setState({ displayedValue })
    if (this.props.handleChange) {
      this.props.handleChange(input, displayedValue)
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