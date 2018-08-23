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
  children: ChildrenArray<Node>,
  containterClassName: string,otherProps: any,
  className?: string,
  showCloseButton?: boolean,
  showHeader?: boolean,
  width?: string
}

@wrapFabricContext
export class DialogBox extends React.Component {
  render() {
    console.log(this.props)
    const {
      title,
      subText,
      onDismiss,
      hideDialog,
      isBlocking,
      containerClassName = '',
      className = '',
      children,
      width = '600px',
      footerRenderer,
      showHeader = false,
      showCloseButton = true
    } = this.props

    const { props } = this

    return (
      <Dialog
      hidden={hideDialog}
      dialogType="normal"
      onDismissed={onDismiss}
      onDismiss={onDismiss}
      showCloseButton={showCloseButton}
      dialogContentProps={{
        title: title,
        subText: subText,
      }}
      modalProps={{
				className: `${showHeader ? 'CustomDialogWithHeader' : 'CustomDialogWithoutHeader'} ${className}`,
        containerClassName: `dialogModalContent ${containerClassName}`,
				isBlocking: isBlocking,
				isDarkOverlay: true
			}}

    >
      {children}
      {footerRenderer && <DialogFooter className="DialogFooter">{footerRenderer()}</DialogFooter>}
    </Dialog>
    )
  }
}

DialogBox.defaultProps = {
  isBlocking: false,
  hideDialog: false,
}
