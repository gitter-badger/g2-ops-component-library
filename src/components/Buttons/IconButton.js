import React from "react"
import PropTypes from "prop-types"
import MuiIconButton from "material-ui/IconButton"

const IconButton = props => (
  <MuiIconButton tooltip={props.tooltip} onClick={props.onClick}>
    {props.children}
  </MuiIconButton>
)

IconButton.propTypes = {
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
}

export default IconButton
