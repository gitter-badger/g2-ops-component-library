FilterSidebar Example:

```js
var FilterSidebar = require('./FilterSidebar').default;
var filters = require('./FilterMockData').default;
var quickLinks = require('./FilterMockData').quickLinks;

<FilterSidebar 
    filters={filters}
    onFilterChange={() => { console.log('on filter change ') }}
    onQuickFiltersChange={() => { console.log('onn quick filter change ') }}
    onFiltersClear={() => { console.log('on filters clear ') }}
    quickFilters={quickLinks}
    height={'250px'}
    width={'250px'}
/>

```