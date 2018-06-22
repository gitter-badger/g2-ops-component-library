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
    handleSearch={(result) => console.log(result,'Search Clicked')}
    showCheckbox={true}
    themeVariant='dark'
  />
</div>
```

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

<div style={{ padding: '5px',width: '100%', border: '1px solid #a6a6a6',backgroundColor: 'indigo' }}>
  <SearchBar
    searchType={{ key: 'lot', name: 'Lot' }}
    searchTypes={searchTypes}
    borderless
    searchText='Default Search Text'
    handleSearch={(result) => console.log(result,'Search Clicked')}
    showCheckbox={true}
    themeVariant='light'
  />
</div>
```
