import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import MuiIconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui/svg-icons/content/add'
import EditIcon from 'material-ui/svg-icons/image/edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'
import { wrapMuiContext } from '../../wrapMuiContext'
import './style.scss'

const buttonPropTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'inactive',
    'add',
    'edit',
    'delete'
  ]).isRequired
}
const Button = ({ primary, secondary, type, ...buttonProps }) => {
  let typeProps
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'inactive': {
      typeProps = {
        ...buttonProps,
        className: `copartButton ${type}Button`
      }
      break
    }
    case 'add': {
      typeProps = {
        ...buttonProps,
        label: 'Add',
        className: `copartButton primaryButton ${type}Button`,
        icon: <AddIcon />
      }
      break
    }
    case 'edit': {
      typeProps = {
        ...buttonProps,
        label: 'Edit',
        className: `copartButton primaryButton ${type}Button`,
        icon: <EditIcon />
      }
      break
    }
    case 'delete': {
      typeProps = {
        ...buttonProps,
        label: 'Delete',
        className: `copartButton ${type}Button`,
        icon: <DeleteIcon />
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

export const IconButton = wrapMuiContext(MuiIconButton)
export default wrapMuiContext(Button)
