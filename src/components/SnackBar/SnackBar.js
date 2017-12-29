import React from 'react'
import PropTypes from 'prop-types'
import { wrapMuiContext } from '../../wrapMuiContext'
import Snackbar from 'material-ui/Snackbar'
import './SnackBar.scss'

const buttonPropTypes = {
  showSnackBar: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.Bool,
}

class SnackBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: this.props.showSnackBar || false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.props.message}
          autoHideDuration={4000000}
          action={this.props.showOKButton ? 'OK' : null}
          onActionTouchTap={this.handleRequestClose}
          onRequestClose={this.handleRequestClose}
          style={{ left: 'auto', bottom: '5px', right: '5px' }}
          bodyStyle={{ maxWidth: '800px', backgroundColor: this.props.error ? '#EE2727' : '#92D04E' }}
          className="CopartSnackBar"
        />
      </div>
    );
  }
}

export default wrapMuiContext(SnackBar)