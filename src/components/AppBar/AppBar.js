import React from 'react'
import PropTypes from 'prop-types'
import renderIf from 'render-if'
import MuiAppBar from 'material-ui/AppBar'
import SearchBar from '../SearchBar/SearchBar'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import ContextualMenu from '../ContextualMenu/ContextualMenu'
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

const Flag = ({ countryCode, type }) => {
  const imgProps = type === 'cas' ? { height: '22px' } : { height: '30px' }
  const flagUrl = `public/flag_icons/flag_${flagMapper[countryCode] || countryCode}.png`
  return <img src={flagUrl} alt="Flag" {...imgProps} />
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
  } = otherProps
  return (
    <div className="flex-grid">
      <div className="col element">
        {renderIfFlag(<Flag countryCode={countryCode} type={type} />)}
        {renderIfRole(<div className="text">{role}</div>)}
      </div>
      {renderIfYard(
        <div className="col element">
          <i className="material-icons md-light">domain</i>
          <div className="iconText">{yardNumber}</div>
        </div>
      )}
      {renderIfPhone(
        <div className="col element">
          <i className="material-icons md-light">phone</i>
          <div className="iconText">{phoneNumber}</div>
        </div>
      )}
      <div className="col logout-icon">{renderIfLoggedInMenu(
        <ContextualMenu
          userName={'Sidharth Mehra'}
          onRenderIcon={() => (<i className="material-icons md-light">account_circle</i>)}
        />
      )}</div>
      <DefaultButton text="Feedback" />
    </div>
  )
}

const renderLogoAndSearchBar = (showSearchBar) => (
  <div className="flex-grid">
    <img className="logo" src="public/images/logo.svg" alt="Copart" />
    {showSearchBar &&
      <div className="searchBar">
        <SearchBar searchTypeValue={{ key: 'lot', name: 'Lot' }} borderless={true} />
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
    ...appBarProps
  } = otherProps
  return (
    <MuiAppBar
      iconElementLeft={renderLogoAndSearchBar(showSearchBar)}
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