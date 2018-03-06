Hierarchy Selector Example

```js
const HierarchySelector = require('./HierarchySelector').default

const nestedOptions = [
  {
    name: 'asia',
    label: 'Asia',
    options: [
      {
        name: 'india',
        label: 'India',
        options: [
          {
            name: 'telangana',
            label: 'Telangana'
          }
        ]
      },
      {
        name: 'china',
        label: 'China',
        options: [
          {
            name: 'beijing',
            label: 'Beijing'
          }
        ]
      }
    ]
  },
  {
    name: 'northAmerica',
    label: 'North America',
    options: [
      {
        name: 'usa',
        label: 'USA',
        options: [
          {
            name: 'texas',
            label: 'Texas'
          },
          {
            name: 'arkansas',
            label: 'Arkansas'
          }
        ]
      }
    ]
  },
  {
    name: 'africa',
    label: 'Africa',
    options: [
      {
        name: 'egypt',
        label: 'Egypt'
      },
      {
        name: 'libya',
        label: 'Libya'
      }
    ]
  }
]
;<div style={{ maxWidth: '400px' }}>
  <HierarchySelector
    name="AutoSelect Field"
    options={nestedOptions}
    width={200}
    optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
  />
</div>
```
