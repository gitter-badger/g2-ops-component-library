FilterSidebar Example:

```js
var FilterSidebar = require('./FilterSidebar').default;
var filters = require('./MockData/FilterMockData').default;
var quickLinks = require('./MockData/FilterMockData').quickLinks;

<FilterSidebar 
    filters={filters}
    onFilterChange={(obj) => { console.log('on filter change ',obj) }}
    onQuickFiltersChange={(obj) => { console.log('onn quick filter change ', obj) }}
    onFiltersClear={() => { console.log('on filters clear ') }}
    quickFilters={quickLinks}
    selectedQuickFilter={"dispatch"}
    height={'450px'}
    width={'350px'}
/>

```