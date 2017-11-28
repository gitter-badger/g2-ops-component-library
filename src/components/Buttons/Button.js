import React from "react"
import PropTypes from 'prop-types'
import RaisedButton from "material-ui/RaisedButton"
import AddIcon from "material-ui/svg-icons/content/add"
import EditIcon from "material-ui/svg-icons/image/edit"
import './style.scss'

const buttonPropTypes = {
  type: PropTypes.string.isRequired,
}

const Button = ({ primary, secondary, disabled, type, ...otherProps }) => {
  let button
  switch (type) {
    case "primary":
    case "secondary":
    case "inactive": {
      button = <RaisedButton
        {...otherProps}
        className={`copartButton ${type}Button`}
        labelStyle={{ textTransform: 'Capitalize' }}
        disabled={type === "inactive"}
      />
      break
    }
    case "add": {
      button = <RaisedButton
        {...otherProps}
        label="Add"
        className={`copartButton primaryButton ${type}Button`}
        labelStyle={{ textTransform: 'Capitalize' }}
        icon={<AddIcon />}
      />
      break
    }
    case "edit": {
      button = <RaisedButton
        {...otherProps}
        label="Edit"
        className={`copartButton primaryButton ${type}Button`}
        labelStyle={{ textTransform: 'Capitalize' }}
        icon={<EditIcon />}
      />
      break
    }
  }
  return button || null
}

Button.propTypes = buttonPropTypes

export default Button
