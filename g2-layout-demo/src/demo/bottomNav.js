import React from 'react'
import { BottomNavigation, BottomNavigationItem, Paper } from 'ops-portal-component-library'
import './style.scss'

const bottomNavConfig = (isEditing) => [
  { label: 'Awaiting Release', icon: 'forward', rtl: 'md-rtl' },
  { label: 'Awaiting Inventory', icon: 'forward' },
  { label: isEditing ? 'Save' : 'Edit', icon:  isEditing ? 'save' : 'edit' },
  { label: 'Discard', icon: 'delete_forever' },
  { label: 'Cancel Lot', icon: 'cancel' },
  { label: 'Discrepancy', icon: 'offline_pin' },
  { label: 'Pickup Order', icon: 'receipt' },
]

const BottomNav = ({ onToggleEdit, isEditing, ...otherProps }) => {
  return (
    <Paper zDepth={1}>
      <BottomNavigation className="bottomnav background">
        <div className="notes">
          <span></span>
        </div>
        {bottomNavConfig(isEditing).map((item) => (
          <BottomNavigationItem
            key={item.label}
            label={item.label}
            icon={<i className={`material-icons ${item.rtl}`}>{item.icon}</i>}
            onTouchTap={() => {
              ['edit', 'save'].includes(item.icon) && onToggleEdit()
              console.log(item.label, ' clicked')
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
