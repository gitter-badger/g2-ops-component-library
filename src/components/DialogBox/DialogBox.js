import * as React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import './style.scss'

const defaultProps = {
  isBlocking: false,
  hideDialog: false
}
const propTypes = {
  title: PropTypes.string,
  subText: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  hideDialog: PropTypes.bool,
  isBlocking: PropTypes.bool,
  onRenderFooter: PropTypes.func,
  containerClassName: PropTypes.string
}

const DialogBox = ({ title, subText, onDismiss, hideDialog, isBlocking, containerClassName, children, onRenderFooter, ...otherProps }) => (
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

export default DialogBox
