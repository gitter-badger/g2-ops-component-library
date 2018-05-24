Cobalt Portal App Bar

```js
const SearchBar = require('../SearchBar/SearchBar')

const MOCK_ISSUE_TYPE_VALUES = [
	{
		key: 0,
		value: 'ENHANCEMENT',
		displayValue: 'enhancement',
		isSelectable: true
	},
	{
		key: 1,
		value: 'FOOBAR',
		displayValue: 'foobar',
		isSelectable: true
	},
	{
		key: 2,
		value: 'YELLOW TAXI',
		displayValue: 'yellow taxi',
		isSelectable: true
	}
]

const MOCK_PROCESS_VALUES = [
	{
		key: 0,
		value: 'ABC',
		displayValue: 'Abc',
		isSelectable: true
	},
		{
		key: 1,
		value: 'ESPN',
		displayValue: 'Espn',
		isSelectable: true
	},
]

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

const configCAS = {
  type: 'cas',
  config: ['flag', 'yard', 'phone'],
	isLoggedOn: true,
	countryCode: 'us',
  yardNumber: 12,
  phoneNumber: 7834873587,
  showSearchBar: false,
  moduleName: 'CAS Portal'
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
]
;<div style={{ margin: '-17px' }}>
  <AppBar
    {...configCobalt}
    onLogoutItemClicked={(event, item) => console.log(item)}
    logoutItems={logoutItems}
		onFeedbackClick={() => console.log('Feedback clicked')}
		role="foobar"
		userEmail="test@copart.com"
		selectedYard={2244}
		language="Spanglish"
		afterSendFeedback={() => { console.log('afterSendFeedback') }}
		feedbackIssueTypeValues={MOCK_ISSUE_TYPE_VALUES}
		feedbackProcessValues={MOCK_PROCESS_VALUES}
		homeYard={99}
		selectedRole="barfoo"
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
</div>
```
