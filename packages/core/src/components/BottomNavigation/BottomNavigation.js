// @flow
import type { Node, ChildrenArray } from 'react'

import React from 'react'
import { BottomNavigation as MuiBottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'

import { wrapMuiContext } from 'utilities/wrapMuiContext'

export const BottomNavigation = wrapMuiContext(<T: { children?: ChildrenArray<Node> }>(props: T) => (
  <MuiBottomNavigation {...props}>{props.children}</MuiBottomNavigation>
))

// export default wrapMuiContext(BottomNavigation)
export { BottomNavigationItem }
