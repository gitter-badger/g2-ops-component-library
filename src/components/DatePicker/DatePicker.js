import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {dateTimeFormat, formatIso, isEqualDate} from 'material-ui/DatePicker/dateUtils';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TextField from 'material-ui/TextField';
import IconButton from '../../components/Buttons/IconButton'
import CalendarIcon from 'material-ui/svg-icons/action/date-range'
import moment from 'moment'

class DatePicker extends Component {
  static propTypes = {
    DateTimeFormat: PropTypes.func,
    autoOk: PropTypes.bool,
    cancelLabel: PropTypes.node,
    className: PropTypes.string,
    container: PropTypes.oneOf(['dialog', 'inline']),
    defaultDate: PropTypes.object,
    dialogContainerStyle: PropTypes.object,
    disableYearSelection: PropTypes.bool,
    disabled: PropTypes.bool,
    firstDayOfWeek: PropTypes.number,
    formatDate: PropTypes.func,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    mode: PropTypes.oneOf(['portrait', 'landscape']),
    okLabel: PropTypes.node,
    onChange: PropTypes.func,
    onDismiss: PropTypes.func,
    onFocus: PropTypes.func,
    onShow: PropTypes.func,
    onTouchTap: PropTypes.func,
    shouldDisableDate: PropTypes.func,
    style: PropTypes.object,
    textFieldStyle: PropTypes.object,
    value: PropTypes.object,
  };

  static defaultProps = {
    autoOk: false,
    container: 'dialog',
    disabled: false,
    disableYearSelection: false,
    firstDayOfWeek: 1,
    style: {},
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    date: undefined,
    displayDate: '',
  };

  componentWillMount() {
    this.setState({
      date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.isControlled()) {
      const newDate = this.getControlledDate(nextProps);
      if (!isEqualDate(this.state.date, newDate)) {
        const { defaultFormat } = this.props
        this.setState({
          date: newDate,
          displayDate: moment(newDate, defaultFormat).format(defaultFormat)
        });
      }
    }
  }

  getDate() {
    return this.state.date;
  }

  openDialog() {
    if (this.state.date !== undefined) {
      this.setState({
        dialogDate: this.getDate(),
      }, this.refs.dialogWindow.show);
    } else {
      this.setState({
        dialogDate: new Date(),
      }, this.refs.dialogWindow.show);
    }
  }

  focus() {
    this.openDialog();
  }

  handleAccept = (date) => {
    if (!this.isControlled()) {
      this.setState({
        date: date,
      });
    }
    if (this.props.onChange) {
      this.props.onChange(null, date);
    }
  };

  handleFocus = (event) => {
    // event.target.blur();
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleTouchTap = (event) => {
    if (this.props.onTouchTap) {
      this.props.onTouchTap(event);
    }
    if (!this.props.disabled) {
      setTimeout(() => {
        this.openDialog();
      }, 0);
    }
  };

  isValidDate = (value) => {
    return value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) && moment(value, this.props.defaultFormat).isValid()
  }

  handleKeyUp = (event) => {
    const value = this.state.displayDate
    let displayDate = value.replace(/^(\d\d)(\d)$/g,'$1/$2')
         .replace(/^(\d\d\/\d\d)(\d+)$/g,'$1/$2')
         .replace(/[^\d\/]/g,'')
    const { formatDate, defaultFormat } = this.props
    const isValidDate = this.isValidDate(displayDate)
    if (isValidDate) {
      displayDate = formatDate ? formatDate(displayDate) : this.formatDate(new Date(displayDate))
      const date = formatDate ? moment(displayDate, defaultFormat).toDate() : this.formatDate(new Date(displayDate))  
      this.setState({
        date,
        displayDate,
      })
    } else {
      this.setState({
        displayDate,
      })
    }
  }

  handleTextFieldChange = (event) => {
    this.setState({
        displayDate: event.target.value
    })
  }

  isControlled() {
    return this.props.hasOwnProperty('value');
  }

  getControlledDate(props = this.props) {
    if (props.value instanceof Date) {
      return props.value;
    }
  }

  formatDate = (date) => {
    if (this.props.locale) {
      const DateTimeFormat = this.props.DateTimeFormat || dateTimeFormat;
      return new DateTimeFormat(this.props.locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }).format(date);
    } else {
      return formatIso(date);
    }
  };

  render() {
    const {
      DateTimeFormat,
      autoOk,
      cancelLabel,
      className,
      container,
      defaultDate, // eslint-disable-line no-unused-vars
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
      onTouchTap, // eslint-disable-line no-unused-vars
      shouldDisableDate,
      style,
      textFieldStyle,
      wordings,
      defaultFormat,
      formatDate: formatDateProp,
      ...other,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const formatDate = formatDateProp || this.formatDate;

    return (
      <div className={className} style={prepareStyles(Object.assign({}, style))}>
        <TextField
          {...other}
          onFocus={this.handleFocus}
          onKeyUp={this.handleKeyUp}
          onChange={this.handleTextFieldChange}
          ref="input"
          style={textFieldStyle}
          value={this.state.displayDate}
          floatingLabelStyle={{ color: '#1d5ab9' }}
          underlineStyle={{ borderColor: '#1d5ab9' }}
          underlineFocusStyle={{ borderColor: '#1d5ab9' }}
        />
        <IconButton onClick={this.handleTouchTap} style={{ marginLeft: '-40px' }}>
          <CalendarIcon />
        </IconButton>
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
          ref="dialogWindow"
          shouldDisableDate={shouldDisableDate}
          wordings={wordings}
        />
      </div>
    );
  }
}

export default DatePicker;
