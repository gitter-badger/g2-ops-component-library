import React, { Component, PropTypes } from 'react'
import TimePicker from 'material-ui/TimePicker'
import { wrapMuiContext } from  '../../wrapMuiContext'
import Style from './Style'

class TimePickerNew extends Component {
  render() {
    const { disabled, label, required, textStyle, name, value, handleChange, errorText, errorStyle, style } = this.props
    return (
      <div>
        <TimePicker
          autoOk
          ref={(elem) => { this.timePicker = elem }}
          className={disabled ? 'disabledTabField' : 'editableTabField'}
          style={{...Style.root, style}}
          disabled={disabled}
          floatingLabelText={required && !disabled ? `${label}*` : label}
          hintText={disabled ? '' : 'HH:MM'}
          floatingLabelStyle={required && !disabled ? Style.floatingLabelRequired : Style.floatingLabel}
          textFieldStyle={{ width: '100%', ...textStyle }}
          underlineFocusStyle={Style.underlineFocus}
          name={name}
          format="ampm"
          value={value}
          onChange={handleChange}
          floatingLabelFixed={this.props.floatingLabelFixed || true}
          required={required || false}
          errorText={errorText}
          errorStyle={errorStyle || Style.errorStyle}
        />
        <input type="hidden" name={this.props.name} value={this.props.value} ref={(elem) => { this.input = elem }} />
      </div>
    )
  }
}

TimePickerNew.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.shape(),
  textStyle: PropTypes.shape(),
  errorText: PropTypes.string,
  errorStyle: PropTypes.shape(),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  floatingLabelFixed: PropTypes.bool,
}

export default wrapMuiContext(TimePickerNew)
