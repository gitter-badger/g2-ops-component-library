Cobalt Portal App Bar

```js
var configCobalt = {
  type: 'cobalt',
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  yardNumber: 5001,
  role: 'Germany Executive',
  showSearchBar: false
};

<div style={{ margin: "0px" }}>
  <AppBar
    {...configCobalt}
   />
</div>
```

CAS Portal App Bar
```js
var configCAS = {
  type: 'cas',
  config: [ 'flag', 'yard', 'phone' ],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: 7834873587,
  showSearchBar: false
};

<div style={{ margin: "0px" }}>
  <AppBar
    {...configCAS}
   />
</div>
```