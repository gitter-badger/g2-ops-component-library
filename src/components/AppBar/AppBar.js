import React from 'react'
import PropTypes from 'prop-types'
import renderIf from 'render-if'
import MuiAppBar from 'material-ui/AppBar'
import Button from "../Buttons/Button"
import LogoutMenu from './LogoutMenu'
import { wrapMuiContext } from '../../wrapMuiContext'
import './style.scss'

const appBarPropTypes = {
  config: PropTypes.array.isRequired,
  iconElementRight: PropTypes.object,
  iconStyleRight: PropTypes.object
}

const flagMapper = {
  'ca': 'canada'
}

const Flag = ({ countryCode }) => {
  const flagUrl = `public/flag_icons/flag_${flagMapper[countryCode] || countryCode}.png`
  return <img src={flagUrl} alt="Flag" />
}

const Role = ({ role }) => (
  <div className="col">{role}</div>
)

const Phone = ({ phoneNumber }) => (
  <div className="col element-text">{phoneNumber}</div>
)

const renderAppBarElements = ({ config, isLoggedOn, ...otherProps }) => {
  const renderIfFlag = renderIf(config.includes('flag') && isLoggedOn)
  const renderIfRole = renderIf(config.includes('role') && isLoggedOn)
  const renderIfYard = renderIf(config.includes('yard') && isLoggedOn)
  const renderIfPhone = renderIf(config.includes('phone') && isLoggedOn)
  const renderIfLoggedInMenu = renderIf(isLoggedOn)
  const {
    countryCode,
    role,
    yardNumber,
    phoneNumber
  } = otherProps
  return (
    <div className="flex-grid">
      <div className="col element-icon">{renderIfFlag(<Flag countryCode={countryCode} />)}</div>
      {renderIfRole(<Role role={role} />)}
      <div className="col element-icon">{renderIfYard(<i className="material-icons md-light">domain</i>)}</div>
      <div className="col element-text">{renderIfYard(<div>{yardNumber}</div>)}</div>
      <div className="col element-icon">{renderIfPhone(<i className="material-icons md-light">phone</i>)}</div>
      {renderIfPhone(<Phone phoneNumber={phoneNumber} />)}
      <div className="col logout-icon">{renderIfLoggedInMenu(
        <LogoutMenu userName={'Sidharth Mehra'} />
      )}</div>
      <Button label="Feedback" type="secondary" />
    </div>
  )
}

const AppBar = (props) => {
  const { config, iconElementRight, isLoggedOn, iconStyleRight, children, ...otherProps } = props
  const {
    countryCode,
    role,
    yardNumber,
    phoneNumber,
    ...appBarProps
  } = otherProps
  return (
    <MuiAppBar
      iconElementLeft={<img className="logo" src="public/images/logo.svg" alt="Copart" />}
      iconElementRight={renderAppBarElements(props)}
      iconStyleRight={iconStyleRight}
      {...appBarProps}
    >
      {children}
    </MuiAppBar>
  )
}

AppBar.propTypes = appBarPropTypes

export default wrapMuiContext(AppBar)