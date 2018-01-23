DatePicker Example:

```js
var moment = require('moment');
var defaultFormat = 'DD/MM/YYYY'

initialState = { dateValue: new Date() };
<div style={{ maxWidth: '300px' }}>
  <DatePicker
		autoOk
		placeholder={defaultFormat}
		hintText={defaultFormat}
		container="inline"
		value={state.dateValue}
		onChange={(e, dateValue) => setState({ dateValue })}
		label="Select Date"
		defaultFormat={defaultFormat}
		formatDate={(date) => moment(date, defaultFormat).format(defaultFormat)}
  />
</div>
```