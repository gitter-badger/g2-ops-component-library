FilterSidebar Example:

```js
var FilterSidebar = require('./FilterSidebar').default

const filters = [
  {
    "label": "Buyer Number",
    "name": "buyerNumber",
    "filterValuesNameList": [
      "2597",
      "91908",
      "323929"
    ],
    "selectedValues": [],
    "filterOptions": [
      {
        "name": "2597",
        "label": "2597",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "91908",
        "label": "91908",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "323929",
        "label": "323929",
        "count": 1,
        "isSelected": false
      }
    ]
  },
  {
    "label": "City",
    "name": "city",
    "filterValuesNameList": [
      "ALEKNAGIK",
      "BAKERSFIELD",
      "BENICIA",
      "COLTON",
      "DALLAS",
      "FAIRFIELD",
      "GRASS VALLEY",
      "HOUSTON",
      "NULL",
      "RENO",
      "SACRAMENTO",
      "SAN BERNARDINO",
      "SANTA ANA",
      "SANTA MONICA",
      "SONOMA",
      "SOUTH EL MONTE",
      "VACAVILLE"
    ],
    "selectedValues": [],
    "filterOptions": [
      {
        "name": "ALEKNAGIK",
        "label": "ALEKNAGIK",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "BAKERSFIELD",
        "label": "BAKERSFIELD",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "BENICIA",
        "label": "BENICIA",
        "count": 5,
        "isSelected": false
      },
      {
        "name": "COLTON",
        "label": "COLTON",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "DALLAS",
        "label": "DALLAS",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "FAIRFIELD",
        "label": "FAIRFIELD",
        "count": 4,
        "isSelected": false
      },
      {
        "name": "GRASS VALLEY",
        "label": "GRASS VALLEY",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "HOUSTON",
        "label": "HOUSTON",
        "count": 2,
        "isSelected": false
      },
      {
        "name": "NULL",
        "label": "NULL",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "RENO",
        "label": "RENO",
        "count": 2,
        "isSelected": false
      },
      {
        "name": "SACRAMENTO",
        "label": "SACRAMENTO",
        "count": 5,
        "isSelected": false
      },
      {
        "name": "SAN BERNARDINO",
        "label": "SAN BERNARDINO",
        "count": 3,
        "isSelected": false
      },
      {
        "name": "SANTA ANA",
        "label": "SANTA ANA",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "SANTA MONICA",
        "label": "SANTA MONICA",
        "count": 13,
        "isSelected": false
      },
      {
        "name": "SONOMA",
        "label": "SONOMA",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "SOUTH EL MONTE",
        "label": "SOUTH EL MONTE",
        "count": 1,
        "isSelected": false
      },
      {
        "name": "VACAVILLE",
        "label": "VACAVILLE",
        "count": 1,
        "isSelected": false
      }
    ]
  }
];


const quickLinks = [
  {
    "count": 25,
    "icon": <i className="material-icons">build</i>,
    "name": "lots",
    "tooltipText": "Awaiting Dispatch"
  }
];

<FilterSidebar 
    filters={filters}
    onFilterChange={() => { console.log('on filter change ') }}
    onQuickFiltersChange={() => { console.log('onn quick filter change ') }}
    quickFilters={quickLinks}
/>

```