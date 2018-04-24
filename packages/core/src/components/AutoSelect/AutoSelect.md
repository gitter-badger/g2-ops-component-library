AutoSelect Example:

```js
let options = [1, 2, 3, 4, 5, 6]
let descriptions = {
  1: { code: 1, desc: 'Ape' },
  2: { code: 2, desc: 'Bee' },
  3: { code: 3, desc: 'Cat' },
  4: { code: 4, desc: 'Dog' },
  5: { code: 5, desc: 'Elephant' },
  6: { code: 6, desc: 'Fish' },
}
initialState = { value: 'Bee' }
;<div style={{ maxWidth: '400px' }}>
  <AutoSelect
    name="AutoSelect Field"
    options={options}
    selectedOption="2"
    value={state.value}
    onChange={(value) => setState({ value })}
    displayOption={(code) => descriptions[code].desc}
    optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
    width={200}
  />
</div>
```
