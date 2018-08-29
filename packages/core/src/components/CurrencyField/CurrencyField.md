CurrencyField:

Uncontrolled Example:

Useful when you want to have the component retaining it's own state
```js

const companyCodeMapper = require('./countryMapper').default;
const countryCode = 'DE';

<div style={{ maxWidth: '300px' }}>
  <CurrencyField
    label={'Currency Field'}
    disabled={false}
    countryCode={countryCode}
    placeholder={companyCodeMapper(countryCode).placeHolder}
    maxValue={999999999.99}
  />
</div>
```

Controlled Example:

Value set from parent as well as being set from within the component.

OnBlur triggers the call to  update the parent state/Redux
```js

const companyCodeMapper = require('./countryMapper').default;
const countryCode = 'DE';
initialState = { value: 1234.56 };

<div style={{ maxWidth: '300px' }}>
  <CurrencyField
    label={'Currency Field'}
    disabled={false}
    countryCode={countryCode}
    placeholder={companyCodeMapper(countryCode).placeHolder}
    maxValue={999999999.99}
    value={state.value}
    onBlur={(formattedValue, rawValue) => {
      console.log(formattedValue, rawValue)
      setState({ value: rawValue })
    }}
  />
</div>
```
