// @flow

import React, { Component } from 'react'
import { pathOr, isEmpty } from 'ramda'
import { TextField } from 'components/TextField'
import { AsYouType } from 'libphonenumber-js'
import { stripDownPhoneNumber, getCountryDialCode, getFormattedNumber } from './phoneNumberUtils'

type PhoneNumberPropsT = {
  value: string,
  label: string,
  placeholder: string,
  countryCode: string,
}

type PhoneNumberStateT = {
  formattedNumber: string,
}

export class PhoneNumber extends Component<PhoneNumberPropsT, PhoneNumberStateT> {
  state = {
    formattedNumber: getFormattedNumber(this.props.value),
  }

  numberInput: Node
  handleChange = (value: string) => {
    const formattedNumber: string = getFormattedNumber(value)
    let caretPosition = this.numberInput.selectionStart
    const oldFormattedText = this.state.formattedNumber
    const diff = formattedNumber.length - oldFormattedText.length

    const onSetStateComplete = () => {
      if (caretPosition === 1 && formattedNumber.length === 2) {
        caretPosition += 1
      }
      if (diff > 0) {
        caretPosition -= diff
      }
      if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
        this.numberInput.setSelectionRange(caretPosition, caretPosition)
      }
    }
    this.setState({ formattedNumber }, onSetStateComplete)
  }

  handleFocus = () => {
    const unformattedPhoneNumber = stripDownPhoneNumber(this.state.formattedNumber)
    if (isEmpty(unformattedPhoneNumber)) {
      this.handleChange(getCountryDialCode(this.props.countryCode))
    }
  }
  render() {
    const { value, placeholder, label, ...otherProps } = this.props
    return (
      <TextField
        {...otherProps}
        label={label}
        componentRef={input => {
          this.numberInput = input
        }}
        onChanged={this.handleChange}
        value={this.state.formattedNumber}
        placeholder={placeholder || label}
        onFocus={this.handleFocus}
      />
    )
  }
}

export { AsYouType }
