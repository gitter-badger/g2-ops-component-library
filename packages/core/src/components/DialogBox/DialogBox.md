Confirmation Dialog example:

```js
const {Button} = require('../Button');
initialState = { hideDialog: true };
<div>
  <Button
    variant='primary'
    onClick={() => setState({ hideDialog: false })}
    label={'Show Default Dialog'}
  />
  <DialogBox
    hideDialog={state.hideDialog}
    isBlocking={false}
    onDismiss={() => setState({ hideDialog: true })}
    title={'Dialog with Header'}
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
    variant='primary'
    onClick={() => setState({ hideDialog: false })}
    label={'Show Dialog with Header'}
  />
  <DialogBox
    showHeader
    title={'Dialog with Header'}
    hideDialog={state.hideDialog}
    isBlocking={false}
    onDismiss={() => setState({ hideDialog: true })}
  >
    <div>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </div>
  </DialogBox>
</div>
```
