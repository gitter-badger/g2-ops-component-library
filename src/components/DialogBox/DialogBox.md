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
    title={'Are you sure you want to move away from this screen?'}
    hideDialog={state.hideDialog}
    onDismiss={() => setState({ hideDialog: true })}
    onRenderFooter={() => (
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
    )}/>
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
    onDismiss={() => setState({ hideDialog: true })}
    onRenderFooter={() => (
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