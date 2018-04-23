CurrencyField Example:

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
