SearchBar Example:

```js
var searchTypes = [
	{ key: 'lot', name: 'Lot' },
  { key: 'seller', name: 'Seller' },
  { key: 'owner', name: 'Owner' },
  { key: 'seller-personnel', name: 'Seller Personnel' },
  { key: 'facility', name: 'Facility' },
  { key: 'location', name: 'Location' },
  { key: 'buyer', name: 'Buyer' },
];

<div style={{ width: 'max-content', border: '1px solid #a6a6a6' }}>
  <SearchBar
    searchType={{ key: 'lot', name: 'Lot' }}
    searchTypes={searchTypes}
    borderless
    searchText='Default Search Text'
    handleSearch={() => console.log('Search Clicked')}
    showCheckbox={false}
  />
</div>
```