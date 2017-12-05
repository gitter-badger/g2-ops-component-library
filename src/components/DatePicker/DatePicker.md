DatePicker Example:

```js
var moment = require('moment');
var defaultFormat = 'DD/MM/YYYY'

initialState = { "dateValue" : null };
<DatePicker
    autoOk
    hintText={defaultFormat}
    container="inline"
    value={state.dateValue}
    onChange={(e, dateValue) => setState({ dateValue})}
    floatingLabelText="Select Date"
    floatingLabelFixed
    defaultFormat={defaultFormat}
    formatDate={(date) => moment(date, defaultFormat).format(defaultFormat)}
/>
```