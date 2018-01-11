import React from 'react'
import PropTypes from 'prop-types'
import MuiIconButton from 'material-ui/IconButton'
import { wrapMuiContext } from '../../wrapMuiContext'

const IconButton = (props) => (
  <MuiIconButton tooltip={props.tooltip} onClick={props.onClick} {...props}>
    {props.children}
  </MuiIconButton>
)

IconButton.propTypes = {
  tooltip: PropTypes.string,
  onClick: PropTypes.func
}

export default wrapMuiContext(IconButton)
