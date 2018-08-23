Cobalt Portal

```js
const { SearchBar } = require('../SearchBar')

const configCobalt = {
  type: 'cobalt',
  config: ['flag', 'role', 'yard'],
  isLoggedOn: true,
	countryCode: 'de',
	yardNumber: 5001,
  role: 'Germany Executive',
  showSearchBar: false,
  moduleName: 'Cobalt Portal'
}

const logoutItems = [
  {
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
  }
]

const searchTypes = [
  { key: 'lot', name: 'Lot' },
  { key: 'seller', name: 'Seller' },
  { key: 'owner', name: 'Owner' },
  { key: 'seller-personnel', name: 'Seller Personnel' },
  { key: 'facility', name: 'Facility' },
  { key: 'location', name: 'Location' },
  { key: 'buyer', name: 'Buyer' }
];

<AppBar
  {...configCobalt}
  onLogoutItemClicked={(event, item) => console.log(item)}
  logoutItems={logoutItems}
  onFeedbackClick={() => console.log('Feedback clicked')}
  role="germany_executive"
  userEmail="test@copart.com"
  selectedYard={2244}
  language="Spanglish"
  afterSendFeedback={() => { console.log('afterSendFeedback') }}
  homeYard={99}
  renderSearchbar={() => (
    <SearchBar
      searchType={{ key: 'lot', name: 'Lot' }}
      searchTypes={searchTypes}
      borderless
      searchText="Default Search Text"
      handleSearch={() => console.log('Search Clicked')}
      showCheckbox={false}
    />
  )}
/>
```

CAS Portal

```
const configCAS = {
  type: 'cas',
  config: ['flag', 'yard', 'phone'],
	isLoggedOn: true,
	countryCode: 'us',
  yardNumber: 12,
  phoneNumber: 80023561,
  showSearchBar: false,
  moduleName: 'CAS Portal'
};


const logoutItems = [
  {
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
  }
]

const searchTypes = [
  { key: 'lot', name: 'Lot' },
  { key: 'seller', name: 'Seller' },
  { key: 'owner', name: 'Owner' },
  { key: 'seller-personnel', name: 'Seller Personnel' },
  { key: 'facility', name: 'Facility' },
  { key: 'location', name: 'Location' },
  { key: 'buyer', name: 'Buyer' }
];


<AppBar
  {...configCAS}
  onLogoutItemClicked={(event, item) => console.log(item)}
  logoutItems={logoutItems}
  onFeedbackClick={() => console.log('Feedback clicked')}
  userEmail="test@copart.com"
  selectedYard={2244}
  language="Spanglish"
  afterSendFeedback={() => { console.log('afterSendFeedback') }}
  homeYard={99}
  renderSearchbar={() => (
    <SearchBar
      searchType={{ key: 'lot', name: 'Lot' }}
      searchTypes={searchTypes}
      borderless
      searchText="Default Search Text"
      handleSearch={() => console.log('Search Clicked')}
      showCheckbox={false}
    />
  )}
/>

```