import React from 'react'
import { BottomNavigation as MuiBottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import { wrapMuiContext } from '../../wrapMuiContext'

/**
 *
 * @example ../../examples/BottomNavigation.md
 */
const BottomNavigation = (props) => (
  <MuiBottomNavigation {...props}>
    {props.children}
  </MuiBottomNavigation>
)

export default wrapMuiContext(BottomNavigation)
export { BottomNavigationItem }
