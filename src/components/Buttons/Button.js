import React from "react"
import PropTypes from 'prop-types'
import RaisedButton from "material-ui/RaisedButton"
import './style.scss'

const buttonPropTypes = {
  type: PropTypes.string.isRequired,
}

const Button = ({ primary, secondary, disabled, type, ...otherProps }) => {
  return (
    <RaisedButton
      {...otherProps}
      className={`copartButton ${type}Button`}
      labelStyle={{ textTransform: 'Capitalize' }}
      disabled={type === "inactive"}
    />
  )
}

Button.propTypes = buttonPropTypes

export default Button
