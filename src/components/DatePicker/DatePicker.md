DatePicker Example:

```js
var moment = require('moment');
var defaultFormat = 'MM/DD/YYYY'

initialState = { dateValue: null };
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