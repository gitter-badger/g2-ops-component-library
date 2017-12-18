import * as React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import './style.scss'

export class DialogBox extends React.Component {
  static defaultProps = {
    isBlocking: false,
    hideDialog: false,
  }
  static propTypes = {
    title: PropTypes.string,
    subText: PropTypes.string,
    onDismiss: PropTypes.func.isRequired,
    hideDialog: PropTypes.bool,
    isBlocking: PropTypes.bool,
    onRenderFooter: PropTypes.func,
    containerClassName: PropTypes.string
  }
  render() {
    const { title, subText, onDismiss, hideDialog, isBlocking, containerClassName, children, onRenderFooter, ...otherProps } = this.props
    return (
      <Dialog
        hidden={hideDialog}
        onDismiss={onDismiss}
        dialogContentProps={{
          type: DialogType.normal,
          title: title,
          subText: subText
        }}
        modalProps={{
          isBlocking: isBlocking,
          containerClassName: 'dialogModelContent'
        }}
      >
      {children}
      {onRenderFooter && 
        <DialogFooter>
          {onRenderFooter()}
        </DialogFooter>}
      </Dialog>
    )
  }
}

export default DialogBox