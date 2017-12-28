AutoSelect Example:

```js
let options = ['A', 'B', 'C', 'D', 'E', 'F'];
let descriptions = {
  'A': { code: 'A', desc: 'Ape'},
  'B': { code: 'B', desc: 'Bee'},
  'C': { code: 'C', desc: 'Cat'},
  'D': { code: 'D', desc: 'Dog'},
  'E': { code: 'E', desc: 'Elephant'},
  'F': { code: 'F', desc: 'Fish'},
};

<AutoSelect
  name="AutoSelect Field"
  options={options}
  selectedOption="C"
  scrollToIndex={500}
  displayOption={(code) => descriptions[code].desc}
  optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
  width={ 200 }
/>
```