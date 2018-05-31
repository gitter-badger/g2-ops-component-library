// @flow
import type { Node, ChildrenArray } from 'react'

import React from 'react'
import { Dialog, DialogFooter } from 'office-ui-fabric-react/lib/Dialog'

import {wrapFabricContext} from 'utilities/wrapFabricContext'

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
  otherProps: any,
}

export const DialogBox = wrapFabricContext((props: DialogBoxPropTypes) => {
  const {
    title,
    subText,
    onDismiss,
    hideDialog,
		isBlocking,
		// TODO: Deprecate containerClassName.
		containerClassName,
		className,
		// actionsContainerClassName,
		// actionsContainerStyle,
		children,
    footerRenderer,
    showHeader,
    ...otherProps
  } = props
  return (
    <Dialog
      hidden={!!hideDialog}
      dialogType="normal"
			onDismiss={onDismiss}
			showCloseButton={props.showCloseButton}
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
      {footerRenderer && <DialogFooter>{footerRenderer()}</DialogFooter>}
    </Dialog>
  )
})

DialogBox.defaultProps = {
  isBlocking: false,
  hideDialog: false,
}