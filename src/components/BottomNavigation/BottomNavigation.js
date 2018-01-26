import React from 'react'
import { BottomNavigation as MuiBottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import { wrapMuiContext } from '../../wrapMuiContext'

const BottomNavigation = (props) => (
  <MuiBottomNavigation {...props}>
    {props.children}
  </MuiBottomNavigation>
)

export default wrapMuiContext(BottomNavigation)
export { BottomNavigationItem }
