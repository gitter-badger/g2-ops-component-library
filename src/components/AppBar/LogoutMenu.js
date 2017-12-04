import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import UserIcon from 'material-ui/svg-icons/action/account-circle'
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import PersonIcon from 'material-ui/svg-icons/social/person'
import LogoffIcon from 'material-ui/svg-icons/action/power-settings-new'

const iconStyle = {
    height: '30px',
    width: '30px',
    color: 'white',
}

const LogoutMenu = ({ userName, logoutAction, settingsAction, ...otherProps }) => (
<IconMenu
    iconButtonElement={<IconButton><UserIcon /></IconButton>}
    anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
    targetOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
    iconStyle={iconStyle}
    desktop
    >
    <MenuItem primaryText={userName} leftIcon={<PersonIcon />}/>
    <MenuItem primaryText={'Settings'} leftIcon={<SettingsIcon />} onClick={settingsAction} />
    <MenuItem primaryText={'Logout'} leftIcon={<LogoffIcon />} onClick={logoutAction} />
</IconMenu>
)

export default LogoutMenu