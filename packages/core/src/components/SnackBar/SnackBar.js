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
      isError,
      message,
      showOKButton,
      showSnackBar,
      anchorOrigin,
    } = this.props

    return (
      <Snackbar
        open={this.state.open}
        message={message}
        autoHideDuration={4000}
        action={showOKButton ? 'OK' : null}
        anchorOrigin={anchorOrigin}
        onActionClick={this.handleRequestClose}
        onRequestClose={this.handleRequestClose}
        style={{ bottom: 5 }}
        bodyStyle={{ maxWidth: '800px', backgroundColor: isError ? '#EE2727' : '#92D04E' }}
        className="CopartSnackBar"
      />
    )
  }
}

export default wrapMuiContext(SnackBar)
