DatePicker Example:

```js
var moment = require('moment');
var defaultFormat = 'MM/DD/YYYY'

initialState = { "dateValue" : null };
<DatePicker
	autoOk
	style={{ maxWidth: '200px' }}
	hintText={defaultFormat}
	container="inline"
	value={state.dateValue}
	onChange={(e, dateValue) => setState({ dateValue})}
	label="Select Date"
	defaultFormat={defaultFormat}
	formatDate={(date) => moment(date, defaultFormat).format(defaultFormat)}
/>
```