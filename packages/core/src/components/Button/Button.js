// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiIconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui/svg-icons/content/add'
import EditIcon from 'material-ui/svg-icons/image/edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'

import { wrapMuiContext } from 'utilities/wrapMuiContext'

import './Button.scss'

type ButtonPropTypes = {
  /** To indicate type of button {primary, secondary, inactive, add, edit, delete} */
  type: 'primary' | 'secondary' | 'inactive' | 'add' | 'edit' | 'delete',
  /** This has no effect currently */
  primary: boolean,
  /** This has no effect currently */
  secondary: boolean,
  /** any extra props to be passed to button */
  buttonProps: any,
}

export const Button = wrapMuiContext(({ primary, secondary, type, ...buttonProps }: ButtonPropTypes) => {
  let typeProps

  switch (type) {
    case 'primary':
    case 'secondary':
    case 'inactive': {
      typeProps = {
        ...buttonProps,
        className: `copartButton ${type}Button`,
      }
      break
    }

    case 'add': {
      typeProps = {
        ...buttonProps,
        label: 'Add',
        className: `copartButton primaryButton ${type}Button`,
        icon: <AddIcon />,
      }
      break
    }

    case 'edit': {
      typeProps = {
        ...buttonProps,
        label: 'Edit',
        className: `copartButton primaryButton ${type}Button`,
        icon: <EditIcon />,
      }
      break
    }

    case 'delete': {
      typeProps = {
        ...buttonProps,
        label: 'Delete',
        className: `copartButton ${type}Button`,
        icon: <DeleteIcon />,
      }
      break
    }

    default: {
      typeProps = buttonProps
    }
  }

  return <RaisedButton {...typeProps} />
})

export const IconButton = wrapMuiContext(MuiIconButton)
