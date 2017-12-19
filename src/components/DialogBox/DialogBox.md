Confirmation Dialog example:

```js
var { PrimaryButton, DefaultButton } = require('office-ui-fabric-react/lib/Button')
initialState = { hideDialog: true };
<div>
  <DefaultButton
    description='Opens the Sample Dialog'
    onClick={() => setState({ hideDialog: false })}
    text='Show Dialog'
  />
  <DialogBox
    title={'Are you sure you want to move away from this screen?'}
    hideDialog={state.hideDialog}
    onDismiss={() => setState({ hideDialog: true })}
    onRenderFooter={() => (
      <div style={{ display: 'flex', float: 'right' }}>
        <PrimaryButton onClick={() => setState({ hideDialog: true })} text='Yes' />
        <span style={{ width: '10px' }}>{}</span>
        <DefaultButton onClick={() => setState({ hideDialog: true })} text='No' />
      </div>
    )}/>
</div>
```

Dialog with content:

```js
var { PrimaryButton, DefaultButton } = require('office-ui-fabric-react/lib/Button')
initialState = { hideDialog: true };
<div>
  <DefaultButton
    description='Opens the Sample Dialog'
    onClick={() => setState({ hideDialog: false })}
    text='Show Dialog'
  />
  <DialogBox
    title={'Dialog with Content'}
    hideDialog={state.hideDialog}
    onDismiss={() => setState({ hideDialog: true })}
    onRenderFooter={() => (
      <div style={{ display: 'flex', float: 'right' }}>
        <PrimaryButton onClick={() => setState({ hideDialog: true })} text='Save' />
        <span style={{ width: '10px' }}>{}</span>
        <DefaultButton onClick={() => setState({ hideDialog: true })} text='Discard' />
      </div>
    )}>
    <div>Main Dialog Content to be added here</div>
    </DialogBox>
</div>
```