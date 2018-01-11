import React from 'react'
import PropTypes from 'prop-types'
import renderIf from 'render-if'
import MuiAppBar from 'material-ui/AppBar'
import SearchBar from 'components/SearchBar/SearchBar'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { LogoutMenu } from './LogoutMenu'
import { wrapMuiContext } from '../../wrapMuiContext'
import './style.scss'

const appBarPropTypes = {
  /** Type of App bar, currently supports two values 'cas' and 'cobalt' */
  type: PropTypes.string.isRequired,
  /** Config that determines elements rendered in right side of the App Bar */
  config: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Module Name displayed under the Copart Logo */
  moduleName: PropTypes.string.isRequired,
  /** Action to perform when a logout menu item is clicked */
  onLogoutItemClicked: PropTypes.func,
  /** Items to be rendered in the logout Menu */
  logoutItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  /** Action to perform on feedback button click */
  onFeedbackClick: PropTypes.func,
  /** Render Search Bar */
  onRenderSearchBar: PropTypes.func,
  /** Two digit country code that renders the Flag */
  countryCode: PropTypes.string.isRequired,
  /** Role Text */
  role: PropTypes.string,
  /** Yard number */
  yardNumber: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** phone number */
  phoneNumber: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** boolean to show searchbar component */
  showSearchBar: PropTypes.bool,
  /** If isLoggedOn is false, renders just the Feedback button, else everything is rendered. */
  isLoggedOn: PropTypes.bool.isRequired
}

const flagMapper = {
  'ca': 'canada'
}

const Flag = ({ countryCode, type }) => {
  const imgProps = type === 'cas' ? { height: '22px' } : { height: '30px' }
  const flagUrl = `./public/assets/flag_icons/flag_${flagMapper[countryCode] || countryCode}.png`
  return (
    <img
      src={flagUrl}
      alt="Flag"
      {...imgProps}
    />
  )
}

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
    phoneNumber,
    type,
    showSearchBar,
    logoutItems,
    onLogoutItemClicked,
    onFeedbackClick
  } = otherProps
  return (
    <div className="flex-grid">
      <div className="col element">
        {renderIfFlag(
          <Flag
            countryCode={countryCode}
            type={type}
          />
        )}
        {renderIfRole(<div className="text">{role}</div>)}
      </div>
      {renderIfYard(
        <div className="col element">
          <i className="material-icons">domain</i>
          <div className="iconText">{yardNumber}</div>
        </div>
      )}
      {renderIfPhone(
        <div className="col element">
          <i className="material-icons">phone</i>
          <div className="iconText">{phoneNumber}</div>
        </div>
      )}
      <div className="col">{renderIfLoggedInMenu(
        <LogoutMenu
          items={logoutItems}
          onItemClick={onLogoutItemClicked}
        />
      )}</div>
      <DefaultButton
        text="Feedback"
        onClick={onFeedbackClick}
      />
    </div>
  )
}

const renderLogoAndSearchBar = ({ showSearchBar, moduleName, onRenderSearchBar }) => (
  <div className="flex-grid">
    <div className="appBarLeft">
      <img
        className="logo"
        src="./public/assets/images/logo.svg"
        alt="Copart"
      />
      <span className="moduleName">{moduleName}</span>
    </div>
    {showSearchBar &&
      <div className="searchBar">
        {onRenderSearchBar()}
      </div>
    }
  </div>
)

const AppBar = (props) => {
  const { config, iconElementRight, isLoggedOn, iconStyleRight, children, ...otherProps } = props
  const {
    countryCode,
    role,
    yardNumber,
    phoneNumber,
    type,
    showSearchBar,
    logoutItems,
    onLogoutItemClicked,
    moduleName,
    onFeedbackClick,
    onRenderSearchBar,
    ...appBarProps
  } = otherProps
  return (
    <MuiAppBar
      iconElementLeft={renderLogoAndSearchBar(props)}
      iconElementRight={renderAppBarElements(props)}
      iconStyleRight={{
        marginTop: '14px',
        marginRight: '-14px'
      }}
      {...appBarProps}
    >
      {children}
    </MuiAppBar>
  )
}

AppBar.propTypes = appBarPropTypes

export default wrapMuiContext(AppBar)
