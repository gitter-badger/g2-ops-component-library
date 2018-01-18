import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.shape(),
  labelClassName: PropTypes.string,
  fieldClassName: PropTypes.string,
  fieldStyle: PropTypes.shape(),
  required: PropTypes.bool,
}

const defaultFieldStyle = {
  width: '60%'
}

const defaultLabelStyle = {
  width: '40%',
  marginTop: '10px',
  color: '#1d5ab9',
  fontSize: '13px'
}

const ComponentWithLabel = (props) => {
  const {
    Component,
    label,
    labelStyle,
    labelClassName,
    fieldClassName,
    fieldStyle,
    required,
    renderEntityAction,
    ...otherProps
  } = props
  const labelText = required ? `${label}*:` : `${label}:`
  return (
    <div style={{ display: 'flex', margin: '5px' }}>
      <span style={{ ...defaultLabelStyle, ...labelStyle }}>
        {labelText}
      </span>
      <span style={{ ...defaultFieldStyle, ...fieldStyle }}>
        <Component {...otherProps} />
      </span>
      {renderEntityAction()}
    </div>
  )
}

ComponentWithLabel.propTypes = propTypes

ComponentWithLabel.defaultProps = {
  renderEntityAction: () => {}
}

export default ComponentWithLabel
