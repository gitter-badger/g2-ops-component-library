import * as React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'
import './style.scss'

const defaultProps = {
  isBlocking: false,
  hideDialog: false
}
const propTypes = {
  /** Title to be displayed in the dialog header */
  title: PropTypes.string,
  subText: PropTypes.string,
  /** Default is normal, largeHeader shows blue background */
  dialogType: PropTypes.oneOf([ 'largeHeader', 'normal' ]),
  onDismiss: PropTypes.func.isRequired,
  /** indicates whether the dialog is hidden or displayed */
  hideDialog: PropTypes.bool,
  isBlocking: PropTypes.bool,
  /** Render Function for rendering items in the Footer */
  onRenderFooter: PropTypes.func,
  containerClassName: PropTypes.string
}

const DialogBox = (props) => {
  const { title, subText, dialogType, onDismiss, hideDialog, isBlocking, containerClassName, children, onRenderFooter, ...otherProps } = props
  const dialogTypeProp = dialogType === 'largeHeader' ? DialogType.largeHeader : DialogType.normal
  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={onDismiss}
      dialogContentProps={{
        type: dialogTypeProp,
        title: title,
        subText: subText
      }}
      modalProps={{
        isBlocking: isBlocking,
        containerClassName: `dialogModelContent ${containerClassName}`
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

DialogBox.propTypes = propTypes
DialogBox.defaultProps = defaultProps

export default DialogBox
