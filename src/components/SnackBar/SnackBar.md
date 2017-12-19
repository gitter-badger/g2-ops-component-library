Button Component Examples:
```js
  initialState = { showSnackBar: false };

  <div>
    <span style={{ margin: '10px' }}>
      <Button
        type="primary"
        label="Show SnackBar"
        onClick={() => setState({ showSnackBar: true })}
      />
    </span>
    {state.showSnackBar && (
      <SnackBar
        showSnackBar={state.showSnackBar}
        message="Hey, you are now seeing a SnackBar."
        showOKButton
      />
    )}
  </div>
```
