Generic TextField component that can be used to implement custom components such as Currency, Phone, etc.

Example:
```js
initialState = { textFieldValue: '' };
<div style={{ width: '300px' }}>
  <TextField
    horizontal
    label='First Name'
    placeholder='Enter First Name'
  />
  <TextField
    horizontal
    label='Last Name'
    placeholder='Enter Last Name'
  />
  <TextField
    horizontal
    label='Required Field'
    placeholder='This Is Required'
    onGetErrorMessage={() => (state.textFieldValue || ''.length) === 0 ? 'This field is required.' : ''}
  />
  <br/>
    <TextField
      label='First Name'
      placeholder='Enter First Name'
    />
    <TextField
      label='Last Name'
      placeholder='Enter Last Name'
    />
    <TextField
      label='Required Field'
      value={state.textFieldValue}
      onChanged={(textFieldValue) => setState({ textFieldValue })}
      onGetErrorMessage={() => (state.textFieldValue || ''.length) === 0 ? 'This field is required.' : ''}
    />
</div>
```
