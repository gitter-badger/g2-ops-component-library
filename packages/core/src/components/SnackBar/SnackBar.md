Copart SnackBar Example:
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
        autoHideDuration={10000}
        errorColor="#1f8bdd"
        isError
        message="Oops, something went wrong here."
        showSnackBar={state.showSnackBar}
        showOKButton
      />
    )}
  </div>
```
