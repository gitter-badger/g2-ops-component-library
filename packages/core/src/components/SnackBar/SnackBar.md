Copart SnackBar Example:
```js
  initialState = { showSnackBar: false };

  <div>
    <span style={{ margin: '10px' }}>
      <Button
        variant="primary"
        label="Show SnackBar"
        onClick={() => setState({ showSnackBar: true })}
      />
    </span>
    {state.showSnackBar && (
      <SnackBar
        isError
        message="Oops, something went wrong here."
        showSnackBar={state.showSnackBar}
        showOKButton
      />
    )}
  </div>
```
