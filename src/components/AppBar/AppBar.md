Cobalt Portal App Bar

```js
var configCobalt = {
  type: 'cobalt',
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  yardNumber: 5001,
  role: 'Germany Executive',
  showSearchBar: false,
  showCheckbox: false,
  moduleName: 'Cobalt Portal'
};

var configCAS = {
  type: 'cas',
  config: [ 'flag', 'yard', 'phone' ],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: 7834873587,
  showSearchBar: false,
  showCheckbox: false,
  moduleName: 'CAS Portal'
};

var logoutItems = [{
    key: 'userName',
    name: 'Sidharth Mehra'
  },
  {
    key: 'settings',
    name: 'Settings'
  },
  {
    key: 'logout',
    name: 'Logout'
}];

<div style={{ margin: "0px" }}>
  <AppBar
    {...configCobalt}
    onLogoutItemClicked={(event, item) => console.log(item)}
    logoutItems={logoutItems}
    onFeedbackClick={() => console.log('Feedback clicked')}
   />
</div>
```