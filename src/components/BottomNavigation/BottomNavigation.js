import React from 'react'
import { BottomNavigation as MuiBottomNavigation } from 'material-ui/BottomNavigation'

/**
 *
 * @example ../../examples/BottomNavigation.md
 */
class BottomNavigation extends React.Component {
  render() {
    return (
      <MuiBottomNavigation {...this.props}>
        {this.props.children}
      </MuiBottomNavigation>
    )
  }
}

export default BottomNavigation