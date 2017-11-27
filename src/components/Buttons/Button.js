import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import './style.scss'

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

export default Button
