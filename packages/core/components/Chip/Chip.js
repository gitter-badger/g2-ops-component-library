// @flow

import type { Node, ChildrenArray } from 'react'

import React from 'react'
import MuiChip from 'material-ui/Chip'
import { wrapMuiContext } from '../../wrapMuiContext'

type StyleType = {
  [string]: mixed,
}

type ChippropTypes = {
  /** Override the background color of the chip. */
  backgroundColor: string,
  /** Used to render elements inside the Chip. */
  children?: ChildrenArray<Node>,
  /** CSS className of the root element. */
  className: string,
  /** Override the label color. */
  labelColor: string,
  /** Override the inline-styles of the label. */
  labelStyle: StyleType,
  /** Callback function fired when the delete icon is clicked. If set, the delete icon will be shown. */
  onRequestDelete: (SyntheticMouseEvent<HTMLInputElement>) => void,
  /** Callback function fired when the Chip element is touch-tapped. */
  onTouchTap: (SyntheticMouseEvent<HTMLInputElement>) => void,
  /** Override the inline-styles of the root element. */
  style: StyleType,
}

const Chip = ({
  backgroundColor,
  children,
  className,
  labelColor,
  labelStyle,
  onRequestDelete,
  onTouchTap,
  style,
}: ChippropTypes) => (
  <MuiChip
    backgroundColor={backgroundColor}
    className={className}
    labelColor={labelColor}
    labelStyle={labelStyle}
    onRequestDelete={onRequestDelete}
    onTouchTap={onTouchTap}
    style={style}
  >
    {children}
  </MuiChip>
)

export default wrapMuiContext(Chip)
