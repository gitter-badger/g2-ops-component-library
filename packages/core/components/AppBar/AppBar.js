// @flow
import type { Node, Element, ChildrenArray } from 'react'

import React from 'react'
import renderIf from 'render-if'
import MuiAppBar from 'material-ui/AppBar'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { LogOutMenu } from './LogOutMenu'
import { wrapMuiContext } from '../../wrapMuiContext'

import './AppBar.scss'

type AppBarPropTypes = {
  /** Type of App bar, currently supports two values 'cas' and 'cobalt' */
  type: string,
  /** Config that determines elements rendered in right side of the App Bar */
  config: Array<string>,
  /** Module Name displayed under the Copart Logo */
  moduleName: string,
  /** Items to be rendered in the logout Menu */
  logoutItems?: Array<{
    key: string,
    name: string,
  }>,
  /** Two digit country code that renders the Flag */
  countryCode: string,
  /** Role Text */
  role?: string,
  /** Yard number */
  yardNumber?: number, // we remove support for string yardNumber,
  /** Phone number */
  phoneNumber?: number, // it is number
  /** To show searchbar component */
  showSearchBar?: boolean,
  /** If isLoggedOn is false, renders just the Feedback button, else everything is rendered. */
  isLoggedOn: boolean,
  /** Action to perform when a logout menu item is clicked */
  onLogoutItemClicked?: (SyntheticMouseEvent<HTMLElement>, { key: string, name: string }) => void,
  /** Action to perform on feedback button click */
  onFeedbackClick?: (SyntheticMouseEvent<HTMLElement>) => void,
  /** Render Search Bar */
  renderSearchbar?: () => Node,
  /** Override default function that renders the Flag */
  onRenderFlag: ({ countryCode: string, type: string }) => Node,
  /** Override default function that renders the Logo */
  onRenderLogo: () => Node,
  /** Takes children which will be rendered inside AppBar */
  children?: ChildrenArray<Node>,
}

const flagMapper: { [string]: string } = {
  ca: 'canada',
}

const Flag = ({ countryCode, type }) => {
  const imgProps = type === 'cas' ? { height: '22px' } : { height: '30px' }
  const flagUrl = `./public/assets/flag_icons/flag_${flagMapper[countryCode] || countryCode}.png`
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
    logoutItems,
    onLogoutItemClicked,
    onFeedbackClick,
    onRenderFlag,
    onRenderLogo,
  } = otherProps
  return (
    <div className="flex-grid">
      <div className="col element">
        {renderIfFlag(onRenderFlag({ countryCode, type }))}
        {renderIfRole(<div className="text role">{role}</div>)}
      </div>
      {renderIfYard(
        <div className="col element">
          <i className="material-icons">domain</i>
          <div className="iconText yardNumber">{yardNumber}</div>
        </div>,
      )}
      {renderIfPhone(
        <div className="col element">
          <i className="material-icons">phone</i>
          <div className="iconText phoneNumber">{phoneNumber}</div>
        </div>,
      )}
      <div className="col">
        {renderIfLoggedInMenu(<LogOutMenu items={logoutItems} onItemClick={onLogoutItemClicked} />)}
      </div>
      <DefaultButton text="Feedback" onClick={onFeedbackClick} />
    </div>
  )
}

const renderLogoAndSearchBar = ({ showSearchBar, moduleName, onRenderLogo, renderSearchbar }) => (
  <div className="flex-grid">
    <div className="appBarLeft">
      {onRenderLogo()}
      <span className="moduleName">{moduleName}</span>
    </div>
    {showSearchBar && renderSearchbar && <div className="searchBar">{renderSearchbar()}</div>}
  </div>
)

const AppBar = (props: AppBarPropTypes): Element<typeof MuiAppBar> => {
  const { config, isLoggedOn, children, ...otherProps } = props
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
    renderSearchbar,
    onRenderFlag,
    onRenderLogo,
    ...appBarProps
  } = otherProps
  return (
    <MuiAppBar
      iconStyleRight={{
        marginTop: '14px',
        marginRight: '-14px',
      }}
      {...appBarProps}
      iconElementLeft={renderLogoAndSearchBar(props)}
      iconElementRight={renderAppBarElements(props)}
    >
      {children}
    </MuiAppBar>
  )
}

AppBar.defaultProps = {
  onRenderFlag: ({ countryCode, type }: { countryCode: string, type: string }): Node => (
    <Flag countryCode={countryCode} type={type} />
  ),
  onRenderLogo: (): Node => <img className="logo" src="./public/assets/images/logo.svg" alt="Copart" />,
}

const wrappedAppBar = wrapMuiContext(AppBar)
export { wrappedAppBar as AppBar }
