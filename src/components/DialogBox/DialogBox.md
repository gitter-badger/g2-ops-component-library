DialogBox example:
```js
var { PrimaryButton, DefaultButton } = require('office-ui-fabric-react/lib/Button')
initialState = { hideDialog: true };
<div>
  <DefaultButton
    description='Opens the Sample Dialog'
    onClick={() => setState({ hideDialog: false })}
    text='Open Dialog'
  />
  <DialogBox
    title={'Are you sure you want to move away'}
    subText={'Subtext added here'}
    hideDialog={state.hideDialog}
    onDismiss={() => setState({ hideDialog: true })}
    onRenderFooter={() => (
      <div>
        <PrimaryButton onClick={() => setState({ hideDialog: true })} text='Save' />
        <DefaultButton onClick={() => setState({ hideDialog: true })} text='Cancel' />
      </div>
    )}>
    <div>Main Dialog Content</div>
  </DialogBox>
</div>
```