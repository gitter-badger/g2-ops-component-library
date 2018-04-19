// @flow
import type { Node, ChildrenArray } from 'react'

import React from 'react'
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'

import {wrapFabricContext} from '../../wrapFabricContext'

import './DialogBox.scss'

const defaultProps = {
  isBlocking: false,
  hideDialog: false,
}

type DialogBoxPropTypes = {
  /** Title to be displayed in the dialog header */
  title: string,
  subText: string,
  /** Default is normal, largeHeader shows blue background */
  dialogType: 'largeHeader' | 'normal',
  onDismiss: (SyntheticMouseEvent<HTMLInputElement>) => void,
  /** indicates whether the dialog is hidden or displayed */
  hideDialog: boolean,
  isBlocking: boolean,
  /** Render Function for rendering items in the Footer */
  footerRenderer?: () => Node,
  containerClassName: string,
  children?: ChildrenArray<Node>,
  containterClassName: string,
  otherProps: any,
}

const DialogBox = (props: DialogBoxPropTypes) => {
  const {
    title,
    subText,
    dialogType,
    onDismiss,
    hideDialog,
    isBlocking,
    containerClassName,
    children,
    footerRenderer,
    ...otherProps
  } = props
  const dialogTypeProp = dialogType === 'largeHeader' ? DialogType.largeHeader : DialogType.normal
  return (
    <Dialog
      hidden={hideDialog}
      onDismiss={onDismiss}
      dialogContentProps={{
        type: dialogTypeProp,
        title: title,
        subText: subText,
      }}
      modalProps={{
        isBlocking: isBlocking,
        containerClassName: `dialogModelContent ${containerClassName}`,
      }}
    >
      {children}
      {footerRenderer && <DialogFooter>{footerRenderer()}</DialogFooter>}
    </Dialog>
  )
}

DialogBox.defaultProps = defaultProps

export default wrapFabricContext(DialogBox)
