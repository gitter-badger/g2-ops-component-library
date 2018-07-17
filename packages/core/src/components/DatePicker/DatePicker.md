DatePicker Example:

```js
var moment = require('moment');
var DatePickerExample = require('./DatePickerExample').default;
var defaultFormat = 'DD/MM/YYYY';
initialState = {
  dateValue: null,
  showCustomError: false,
  disabled: false,
  errorMessage: 'This is a custom required message'
};
<div style={{ maxWidth: '300px' }}>
  <DatePickerExample
    autoOk
    placeholder={defaultFormat}
    hintText={defaultFormat}
    container="inline"
    value={state.dateValue}
    onChange={(e, dateValue) => { setState({ dateValue })} }
    label="Select Date"
    errorMessage={state.errorMessage}
    showCustomError={state.showCustomError}
    minDate={moment()
      .subtract(10, 'd')
      .startOf('day')
      .toDate()}
    maxDate={moment()
      .add(10, 'd')
      .endOf('day')
      .toDate()}
    defaultFormat={defaultFormat}
    formatDate={date => moment(date, defaultFormat).format(defaultFormat)}
    style={state.disabled ? { border: '1px solid #a6a6a6' } : { border: 'none' }}
    disabled={state.disabled}
  />
</div>
```
