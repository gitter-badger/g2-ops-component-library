Copart SnackBar Example:
```js
  initialState = {
    showSnackBar: false,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    }
  };

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
        anchorOrigin={state.anchorOrigin}
        message="Oops, something went wrong here."
        showSnackBar={state.showSnackBar}
        showOKButton
      />
    )}
  </div>
```
