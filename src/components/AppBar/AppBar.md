App Bar Example:

```js
var configCAS = {
  config: [ 'flag', 'yard', 'phone' ],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: 7834873587
};

var configCobalt = {
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  yardNumber: 5001,
  role: 'Germany Office Employee'
};

<div style={{ margin: "0px" }}>
  <AppBar
    {...configCAS}
   />
</div>
```