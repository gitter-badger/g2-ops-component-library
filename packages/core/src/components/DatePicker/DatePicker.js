// @flow
import type { Node } from 'react'

import React, { Component } from 'react'
import renderIf from 'render-if'

import moment from 'moment'
import { isEmpty } from 'ramda'
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import CalendarIcon from 'material-ui/svg-icons/action/date-range'
import { dateTimeFormat, formatIso, isEqualDate } from 'material-ui/DatePicker/dateUtils'

import { TextField } from 'components/TextField'
import { IconButton } from 'components/Button'
import { wrapMuiContext } from 'utilities/wrapMuiContext'

import { getDateObject, getDefaultMinDate, getDefaultMaxDate, validateDateAndGetErrorMesssage } from './dateUtils'

import './style.scss'

type DatePickerProps = {
  autoOk?: boolean,
  cancelLabel: Node,
  className: string,
  container: 'dialog' | 'inline',
  defaultDate: Date,
  defaultFormat: string,
  DateTimeFormat: (string, Object) => string,
  dialogContainerStyle: Node,
  disableYearSelection: boolean,
  disabled: boolean,
  firstDayOfWeek: number,
  formatDate: (string | Date) => string,
  locale?: string,
  maxDate: Date,
  minDate: Date,
  mode: 'portrait' | 'landscape',
  okLabel: Node,
  onChange: (string, Date | null, string) => void,
  onDismiss: (SyntheticEvent<HTMLInputElement>) => void,
  onFocus: (SyntheticFocusEvent<HTMLInputElement>) => void,
  onShow: any => void,
  onClick: (SyntheticUIEvent<HTMLInputElement>) => void,
  shouldDisableDate: Date => boolean,
  style: Node,
  value: Date,
  showCustomError: ?boolean,
  errorMessage: ?string,
}

type DatePickerState = {
  date: Date | null,
  displayDate: string,
  dialogDate: Date | null,
  showCustomError: ?boolean,
  errorMessage: ?string,
  style: Object,
}

class DatePicker extends Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    autoOk: false,
    container: 'dialog',
    disabled: false,
    minDate: getDefaultMinDate(),
    maxDate: getDefaultMaxDate(),
    disableYearSelection: false,
    firstDayOfWeek: 1,
    style: {},
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  state = {
    date: null,
    displayDate: '',
    dialogDate: null,
    showCustomError: this.props.showCustomError,
    errorMessage: this.getInitalErrorMessage(this.props.showCustomError, this.props.errorMessage),
    style: {},
  }

  componentWillMount() {
    const { defaultDate, defaultFormat } = this.props
    const dateValue = this.isControlled() ? this.getControlledDate() : defaultDate
    this.setState({
      date: dateValue,
      displayDate: dateValue ? moment(dateValue).format(defaultFormat) : '',
    })
  }

  componentWillReceiveProps(nextProps: DatePickerProps) {
    if (this.isControlled() && nextProps.value !== null) {
      const newDate = this.getControlledDate(nextProps)
      if (!isEqualDate(this.state.date, newDate)) {
        const { defaultFormat, showCustomError, errorMessage } = nextProps
        this.setState({
          date: newDate,
          showCustomError,
          errorMessage: this.getInitalErrorMessage(showCustomError, errorMessage),
          displayDate: newDate ? moment(newDate).format(defaultFormat) : '',
        })
      }
    }
  }

  getInitalErrorMessage(showCustomError, customError){ return showCustomError && customError }

  getErrorMessage(value, errorMessage, showCustomError, customError) {
    if (showCustomError && isEmpty(value)) return customError
    return errorMessage
  }

  getDate() {
    return this.state.date
  }

  getControlledDate(props: DatePickerProps = this.props) {
    if (props.value instanceof Date) {
      return props.value
    }
  }
  dialogWindow: ?Node

  focus() {
    this.openDialog()
  }

  handleAccept = (date: Date) => {
    if (!this.isControlled()) {
      this.setState({
        date: date,
      })
    }
    if (this.props.onChange) {
      this.props.onChange('', date, '')
    }
  }

  handleFocus = (event: SyntheticFocusEvent<HTMLInputElement>) => {
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleClick = (event: SyntheticUIEvent<HTMLInputElement>) => {
    if (!this.props.disabled) {
      setTimeout(() => {
        this.openDialog()
      }, 0)
    }
  }

  handleTextFieldChange = (value: string) => {
    const prevState = this.state
    const { minDate, maxDate, formatDate, defaultFormat, onChange, showCustomError, errorMessage: customError } = this.props
    const { displayDate, date = prevState.date, errorMessage } = validateDateAndGetErrorMesssage(
      value,
      minDate,
      maxDate,
      formatDate || this.formatDate,
      defaultFormat,
    )
    const finalError = this.getErrorMessage(value, errorMessage, showCustomError, customError)
    this.setState({
      ...prevState,
      date,
      displayDate,
      errorMessage: finalError,
    })
    onChange && onChange(displayDate, date)
  }
  isControlled() {
    return this.props.hasOwnProperty('value')
  }

  openDialog() {
    const dialogDate = this.getDate()
    if (dialogDate !== null) {
      this.setState(
        {
          dialogDate,
        },
        () => this.dialogWindow && this.dialogWindow.show(),
      )
    } else {
      this.setState(
        {
          dialogDate: new Date(),
        },
        () => this.dialogWindow && this.dialogWindow.show(),
      )
    }
  }

  formatDate = (date: string | Date) => {
    if (this.props.locale) {
      const DateTimeFormat: (string, Object) => mixed = this.props.DateTimeFormat || dateTimeFormat
      return new DateTimeFormat(this.props.locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }).format(date)
    } else {
      return formatIso(date)
    }
  }

  render() {
    const {
      DateTimeFormat,
      autoOk,
      cancelLabel,
      className = '',
      container,
      defaultDate, // eslint-disable-line no-unused-vars
      disabled,
      dialogContainerStyle,
      disableYearSelection,
      firstDayOfWeek,
      locale,
      maxDate,
      minDate,
      mode,
      okLabel,
      onDismiss,
      onFocus, // eslint-disable-line no-unused-vars
      onShow,
      onClick,
      shouldDisableDate,
      style,
      defaultFormat,
      formatDate: formatDateProp,
      ...other
		} = this.props

    const formatDate = formatDateProp || this.formatDate
    const renderDateIcon = renderIf(disabled === false)
    return (
      <div className={`DatePicker ${className}`} style={style}>
        <TextField
          {...other}
          errorMessage={this.state.errorMessage}
          value={this.state.displayDate}
          disabled={disabled}
          onChanged={this.handleTextFieldChange}
          onRenderSuffix={() =>
            renderDateIcon(
              <IconButton style={{ margin: '-15px' }} onClick={this.handleClick}>
                <i className="material-icons md-dark md-18">date_range</i>
              </IconButton>,
            )
          }
        />
        <DatePickerDialog
          DateTimeFormat={DateTimeFormat}
          autoOk={autoOk}
          cancelLabel={cancelLabel}
          container={container}
          containerStyle={dialogContainerStyle}
          disableYearSelection={disableYearSelection}
          firstDayOfWeek={firstDayOfWeek}
          initialDate={this.state.dialogDate}
          locale={locale}
          maxDate={maxDate}
          minDate={minDate}
          mode={mode}
          okLabel={okLabel}
          onAccept={this.handleAccept}
          onShow={onShow}
          onDismiss={onDismiss}
          ref={elem => {
            this.dialogWindow = elem
          }}
          shouldDisableDate={shouldDisableDate}
        />
      </div>
    )
  }
}

const wrappedDatePicker = wrapMuiContext(DatePicker)
export { wrappedDatePicker as DatePicker }
