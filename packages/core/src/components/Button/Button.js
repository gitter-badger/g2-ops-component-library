// @flow
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiIconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui/svg-icons/content/add'
import EditIcon from 'material-ui/svg-icons/image/edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever'

import { wrapMuiContext } from 'utilities/wrapMuiContext'

// TODO: Fix button + icon styling.
import './Button.css'

type ButtonPropsT = {
  /** To indicate type of button {primary, secondary, inactive, add, edit, delete} */
  variant: 'primary' | 'secondary' | 'inactive' | 'add' | 'edit' | 'delete',
  /** OnClick event for button */
  onClick: (SyntheticMouseEvent<HTMLInputElement>) => void,
}

export const Button = wrapMuiContext(({ variant, ...buttonProps }: ButtonPropsT) => {
	let typeProps = {}

  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'inactive':
      typeProps = {
        ...buttonProps,
        className: `copartButton ${variant}Button ${buttonProps.className}`,
      }
      break


    case 'add':
      typeProps = {
        ...buttonProps,
        label: 'Add',
        className: `copartButton primaryButton ${variant}Button ${buttonProps.className}`,
        icon: <AddIcon />,
      }
      break

    case 'edit':
      typeProps = {
        ...buttonProps,
        label: 'Edit',
        className: `copartButton primaryButton ${variant}Button ${buttonProps.className}`,
        icon: <EditIcon />,
      }
      break

    case 'delete':
      typeProps = {
        ...buttonProps,
        label: 'Delete',
        className: `copartButton ${variant}Button ${buttonProps.className}`,
        icon: <DeleteIcon />,
      }
      break
    
    default:
      typeProps = { ...buttonProps }

  }

  return <RaisedButton {...typeProps} data-core-component="Button" />
})

Button.defaultProps = {
	className: ''
}

export const IconButton = wrapMuiContext(MuiIconButton)


