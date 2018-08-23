// @flow
import type { Node, ChildrenArray } from 'react'

import React from 'react'
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'

import { wrapFabricContext } from 'utilities/wrapFabricContext'

import './DialogBox.scss'

type DialogBoxPropTypes = {
  /** Title to be displayed in the dialog header */
  title: string,
  subText: string,
  onDismiss: (SyntheticMouseEvent<HTMLInputElement>) => void,
  /** indicates whether the dialog is hidden or displayed */
  hideDialog: boolean,
  isBlocking: boolean,
  /** Render Function for rendering items in the Footer */
  footerRenderer?: () => Node,
  containerClassName: string,
  children?: ChildrenArray<Node>,
  containterClassName: string,
  showHeader?: boolean,
  showCloseButton?: boolean
}

export const DialogBox = wrapFabricContext((props: DialogBoxPropTypes) => {
  const {
    title,
    subText,
    onDismiss,
    hideDialog = false,
		isBlocking = false,
		containerClassName = '',
		className = '',
		children,
    footerRenderer,
    showCloseButton = true,
    showHeader = false,
  } = props
  return (
    <Dialog
      hidden={hideDialog}
      dialogType="normal"
      onDismiss={onDismiss}
      showCloseButton={showCloseButton}
      dialogContentProps={{
        title: title,
        subText: subText,
      }}
      modalProps={{
				className: `${showHeader ? 'CustomDialogWithHeader' : 'CustomDialogWithoutHeader'} ${className}`,
        containerClassName: `dialogModelContent ${containerClassName}`,
				isBlocking: isBlocking,
				isDarkOverlay: true
			}}

    >
      {children}
      {footerRenderer && <DialogFooter className="DialogFooter">{footerRenderer()}</DialogFooter>}
    </Dialog>
  )
})