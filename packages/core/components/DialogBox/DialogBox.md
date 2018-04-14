Confirmation Dialog example:

```js
const Button = require('../Button').default;
initialState = { hideDialog: true };
<div>
  <Button
    type={'primary'}
    onClick={() => setState({ hideDialog: false })}
    label={'Show Dialog'}
  />
  <DialogBox
    hideDialog={state.hideDialog}
    dialogType="confirmation"
    isBlocking={false}
    onDismiss={() => setState({ hideDialog: true })}
    renderFooter={() => (
      <div style={{ display: 'flex', float: 'right' }}>
        <Button 
          type={'primary'}
          onClick={() => setState({ hideDialog: true })}
          label={'Yes'}
        />
        <span style={{ width: '10px' }}>{}</span>
        <Button 
          type={'secondary'}
          onClick={() => setState({ hideDialog: true })}
          label={'No'}
        />
      </div>
    )}
    >
    Are you sure you want to move away from this screen?
  </DialogBox>
</div>
```

Dialog with content:

```js
var { PrimaryButton, DefaultButton } = require('office-ui-fabric-react/lib/Button')
initialState = { hideDialog: true };
<div>
  <Button
    type={'primary'}
    onClick={() => setState({ hideDialog: false })}
    label={'Show Dialog'}
  />
  <DialogBox
    title={'Dialog with Content'}
    hideDialog={state.hideDialog}
    isBlocking={false}
    onDismiss={() => setState({ hideDialog: true })}
    footerRenderer={() => (
      <div style={{ display: 'flex', float: 'right' }}>
        <Button
          type={'primary'}
          onClick={() => setState({ hideDialog: true })}
          label={'Save'}
        />
        <span style={{ width: '10px' }}>{}</span>
        <Button
          type={'secondary'}
          onClick={() => setState({ hideDialog: true })}
          label={'Discard'}
        />
      </div>
    )}>
    <div>Main Dialog Content to be added here</div>
  </DialogBox>
</div>
```