import React from 'react'
import Paper from 'components/Paper/Paper'
import BottomNavigation, { BottomNavigationItem } from 'components/BottomNavigation/BottomNavigation'

const BottomNavExample = (props) => (
  <Paper zDepth={1}>
    <BottomNavigation>
      <BottomNavigationItem
        label="Save"
        icon={<i className="material-icons">save</i>}
        onTouchTap={() => console.log('clicked 0')}
      />
      <BottomNavigationItem
        label="Edit"
        icon={<i className="material-icons">edit</i>}
        onTouchTap={() => console.log('clicked 1')}
      />
      <BottomNavigationItem
        label="Discard"
        icon={<i className="material-icons">delete_forever</i>}
        onTouchTap={() => console.log('clicked 2')}
      />
    </BottomNavigation>
  </Paper>
)

export default BottomNavExample