import React from "react"
import PropTypes from 'prop-types'
import RaisedButton from "material-ui/RaisedButton"
import AddIcon from "material-ui/svg-icons/content/add"
import EditIcon from "material-ui/svg-icons/image/edit"
import DeleteIcon from "material-ui/svg-icons/action/delete-forever"
import './style.scss'

const buttonPropTypes = {
  type: PropTypes.string.isRequired,
}

const Button = ({ primary, secondary, disabled, type, ...buttonProps }) => {
  let typeProps
  switch (type) {
    case "primary":
    case "secondary":
    case "inactive": {
      typeProps = {
        ...buttonProps,
        className:`copartButton ${type}Button`,
        disabled:type === "inactive",
      }
      break
    }
    case "add": {
      typeProps = {
        ...buttonProps,
        label:"Add",
        className:`copartButton primaryButton ${type}Button`,
        icon:<AddIcon />,
      }
      break
    }
    case "edit": {
      typeProps = {
        ...buttonProps,
        label:"Edit",
        className:`copartButton primaryButton ${type}Button`,
        icon:<EditIcon />,
      }
      break
    }
    case "delete": {
      typeProps = {
        ...buttonProps,
        label:"Delete",
        className:`copartButton ${type}Button`,
        icon:<DeleteIcon />,
      }
      break
    }
    default: {
      typeProps = buttonProps
    }
  }
  return <RaisedButton {...typeProps} />
}

Button.propTypes = buttonPropTypes

export default Button
