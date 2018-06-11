// @flow

import React, { PureComponent } from 'react'
import Snackbar from 'material-ui/Snackbar'

import { wrapMuiContext } from 'utilities/wrapMuiContext'

import './SnackBar.scss'

type ButtonPropType = {
  showSnackBar: boolean,
  message: string,
  showOKButton: boolean,
  isError: boolean,
}

type ButtonStateType = {
  open: boolean,
}

class SnackBar extends PureComponent<ButtonPropType, ButtonStateType> {
  static defaultProps = {
    showSnackBar: false,
    showOKButton: false,
  }

  state = { open: this.props.showSnackBar }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const {
      autoHideDuration,
      defaultColor,
      errorColor,
      isError,
      message,
      showOKButton,
      showSnackBar,
    } = this.props
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={message}
          autoHideDuration={autoHideDuration || 4000}
          action={showOKButton ? 'OK' : null}
          onActionClick={this.handleRequestClose}
          onRequestClose={this.handleRequestClose}
          style={{ left: 'auto', bottom: '5px', right: '5px' }}
          bodyStyle={{ maxWidth: '800px', backgroundColor: isError ? errorColor || '#EE2727' : defaultColor || '#92D04E' }}
          className="CopartSnackBar"
        />
      </div>
    )
  }
}

export default wrapMuiContext(SnackBar)
