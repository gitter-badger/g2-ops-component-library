import React from 'react'
import { BottomNavigation, BottomNavigationItem, Paper } from 'ops-portal-component-library'
import './style.scss'

const bottomNavConfig = [
  { label: 'Awaiting Release', icon: 'forward', rtl: 'md-rtl' },
  { label: 'Awaiting Inventory', icon: 'forward' },
  { label: 'Edit', icon: 'edit' },
  { label: 'Discard', icon: 'delete_forever' },
  { label: 'Cancel Lot', icon: 'cancel' },
  { label: 'Discrepancy', icon: 'offline_pin' },
  { label: 'Pickup Order', icon: 'receipt' },
]

const BottomNav = (props) => {
  return (
    <Paper zDepth={1}>
      <BottomNavigation className="bottomnav background">
        <div className="notes">
          <span></span>
        </div>
        {bottomNavConfig.map((item) => (
          <BottomNavigationItem
            key={item.label}
            label={item.label}
            icon={<i className={`material-icons ${item.rtl}`}>{item.icon}</i>}
            onTouchTap={() => console.log(item.label, ' clicked')}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
