AutoSelect Example:

```js
let options = [0, 1, 2, 3, 4, 5, 6]
let descriptions = {
  0: { code: 0, desc: 'Ape' },
  1: { code: 1, desc: 'Bee' },
  2: { code: 2, desc: 'Cat' },
  3: { code: 3, desc: 'Dog' },
  4: { code: 4, desc: 'Elephant' },
  5: { code: 5, desc: 'Fish' },
  6: { code: 6, desc: 'Giraffe' },
}
initialState = { value: 'Ape' }
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

  <AutoSelect
    horizontal
    label="left to right"
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
