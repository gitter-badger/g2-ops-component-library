Copart SnackBar Example:
```js
  initialState = { showSnackBar: false };
  const handleAutoClose = () => setTimeout(() => setState({ showSnackBar: false }), 3000);
  <div>
    <span style={{ margin: '10px' }}>
      <Button
        type="primary"
        label="Show SnackBar"
        onClick={() => setState({ showSnackBar: true }, handleAutoClose)}
      />
    </span>
    {state.showSnackBar && (
      <SnackBar
        showSnackBar={state.showSnackBar}
        message="Oops, something went wrong here."
        showOKButton
        error
      />
    )}
  </div>
```
