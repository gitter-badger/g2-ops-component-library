CurrencyField Example:

```js
  const companyCodeMapper = require('./countryMapper').default;
  const countryCode = 'DE';

  <CurrencyField
    label={'Currency Field'}
    countryCode={countryCode}
    placeholder={companyCodeMapper(countryCode).placeHolder}
    maxValue={999999999.99}
  />
```
