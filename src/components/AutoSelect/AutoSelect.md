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
initialState = { value: '' };

<div style={{ maxWidth: '400px' }}>
  <AutoSelect
        name="AutoSelect Field"
        options={options}
        selectedOption="C"
        value={state.value}
        onChange={(value) => setState({ value })}
        displayOption={(code) => descriptions[code].desc}
        optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
        width={200}
      />
</div>
```