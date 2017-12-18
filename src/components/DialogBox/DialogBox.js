import * as React from 'react'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup'

export class DialogBox extends React.Component {
  state = {
    hideDialog: true
  }
  showDialog = () => {
    this.setState({ hideDialog: false })
  }
  closeDialog = () => {
    this.setState({ hideDialog: true })
  }
  onChoiceChanged = () => {
    console.log('Choice option change')
  }
  render() {
    return (
      <div>
        <DefaultButton
          description='Opens the Sample Dialog'
          onClick={this.showDialog}
          text='Open Dialog'
        />
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: 'All emails together',
            subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
          }}
          modalProps={{
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }}
        >
          <ChoiceGroup
            options={[
              {
                key: 'A',
                text: 'Option A'
              },
              {
                key: 'B',
                text: 'Option B',
                checked: true
              },
              {
                key: 'C',
                text: 'Option C',
                disabled: true
              }
            ] }
            onChange={ this._onChoiceChanged }
          />
          <DialogFooter>
            <PrimaryButton onClick={ this._closeDialog } text='Save' />
            <DefaultButton onClick={ this._closeDialog } text='Cancel' />
          </DialogFooter>
        </Dialog>
      </div>
    )
  }
}

export default DialogBox