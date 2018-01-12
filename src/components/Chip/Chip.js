import React from 'react'
import PropTypes from 'prop-types'
import MuiChip from 'material-ui/Chip'
import { wrapMuiContext } from '../../wrapMuiContext'

const Chip = ({ backgroundColor, children, className, labelColor, labelStyle, onRequestDelete, onTouchTap, style }) => (
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

Chip.propTypes = {
  /** Override the background color of the chip. */
  backgroundColor: PropTypes.string,
  /** Used to render elements inside the Chip. */
  children: PropTypes.node,
  /** CSS className of the root element. */
  className: PropTypes.node,
  /** Override the label color. */
  labelColor: PropTypes.string,
  /** Override the inline-styles of the label. */
  labelStyle: PropTypes.objectOf(PropTypes.any),
  /** Callback function fired when the delete icon is clicked. If set, the delete icon will be shown. */
  onRequestDelete: PropTypes.func,
  /** Callback function fired when the Chip element is touch-tapped. */
  onTouchTap: PropTypes.func,
  /** Override the inline-styles of the root element. */
  style: PropTypes.shape()
}

export default wrapMuiContext(Chip)
