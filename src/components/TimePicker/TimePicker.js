// @flow

import type { Node } from 'react'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiTimePicker from 'material-ui/TimePicker'

import { wrapMuiContext } from '../../wrapMuiContext'

import Style from './TimePicker.style'

type TimePickerPropType = {
  name: string,
  value: string,
  label: string,
  style: { [string]: mixed },
  textStyle: { [string]: mixed },
  errorText: string,
  errorStyle: { [string]: mixed },
  required: boolean,
  disabled: boolean,
  onChange: (Date) => void,
  floatingLabelFixed: boolean,
  id?: string,
}

class TimePicker extends Component<TimePickerPropType> {
  timePicker: Node // eslint-disable-line
  input: Node // eslint-disable-line
  render() {
    const { disabled, label, required, textStyle, name, value, onChange, errorText, errorStyle, style, id } = this.props
    return (
      <div>
        <MuiTimePicker
          autoOk
          ref={(elem) => {
            this.timePicker = elem
          }}
          id={id}
          className={disabled ? 'disabledTabField' : 'editableTabField'}
          style={{ ...Style.root, style }}
          disabled={disabled}
          floatingLabelText={required && !disabled ? `${label}*` : label}
          hintText={disabled ? '' : 'HH:MM'}
          floatingLabelStyle={required && !disabled ? Style.floatingLabelRequired : Style.floatingLabel}
          textFieldStyle={{ width: '100%', ...textStyle }}
          underlineFocusStyle={Style.underlineFocus}
          name={name}
          format="ampm"
          value={value}
          onChange={onChange}
          floatingLabelFixed={this.props.floatingLabelFixed || true}
          required={required || false}
          errorText={errorText}
          errorStyle={errorStyle || Style.errorStyle}
        />
        <input
          type="hidden"
          name={this.props.name}
          value={this.props.value}
          ref={(elem) => {
            this.input = elem
          }}
        />
      </div>
    )
  }
}

export default wrapMuiContext(TimePicker)
