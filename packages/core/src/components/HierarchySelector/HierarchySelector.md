Hierarchy Selector Example

Simple Example:
```js
const Example = require('./Example').default
;<Example />
```

Tow Provider Example:
```js
const TowProviderExample = require('./ComplexExample').default
;<TowProviderExample />
```

Tow Provider Example with alternate value passed:
```js
const TowProviderExample = require('./ComplexExample').default
;<TowProviderExample alternateValue="SUMIT TEST" value={{ company: 'SUMIT TEST' }} />
```
