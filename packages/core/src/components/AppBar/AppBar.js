// @flow
import type { Node, Element, ChildrenArray } from 'react'

import * as React from 'react'
import { type as getType } from 'ramda'

import MuiAppBar from 'material-ui/AppBar'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { LogOutMenu } from './LogOutMenu'
import { wrapMuiContext } from 'utilities/wrapMuiContext'
import { FeedbackDialog } from 'components/FeedbackDialog'
import { CopartLogo } from './CopartLogo'

import { beautifyRoleText } from './utils'

import './AppBar.scss'
import './AppBar.pcss'


type AppBarPropTypes = {
  userEmail: string,
  selectedYard: string | number,
  homeYard: string | number,
  selectedRole: string,
  language: string,
  /** IMPORTANT: Currently requires the function to actually POST the feedback
   * to the server. In the near future, AppBar/FeedbackDialog will handle this
   * functionality for you. An example of what this function should look like
   * can be found here: https://github.com/copartit/quicklooks/blob/6e0fbae22deb8f16fd90944144c4c314f7e7d441/src/components/AppBar/feedbackClick.js
   */
  afterSendFeedback(FeedbackT): any,
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
  phoneNumber?: number,
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

const renderAppBarElements = (props) => {
  const {
    countryCode,
    role,
    yardNumber,
    phoneNumber,
    type,
    showSearchBar,
    logoutItems,
    onLogoutItemClicked,
    afterSendFeedback,
    onFeedbackClick,
    onRenderFlag,
    onRenderLogo,
    config,
    isLoggedOn,
    navigateTo = () => {}
  } = props
  return (
    <div className="flex-grid" styleName="AppBarRight">
      <div className="col element" styleName="roleAndFlag">
        <If condition={config.includes('flag') && isLoggedOn}>
          {onRenderFlag({ countryCode, type })}
        </If>
        <If condition={config.includes('role') && isLoggedOn}>
          <div className="role">{beautifyRoleText(role)}</div>
        </If>
      </div>
      <If condition={config.includes('yard') && isLoggedOn}>
        <div className="col element" styleName="yardNumber" onClick={navigateTo('/settings')}>
          <i className="material-icons">domain</i>
          <div className="yardNumber">{yardNumber}</div>
        </div>
      </If>
      <If condition={config.includes('phone') && isLoggedOn}>
        <div className="col element" styleName="yardNumber">
          <i className="material-icons">phone</i>
          <div className="yardNumber">{phoneNumber}</div>
        </div>
      </If>
      <If condition={['Function'].includes(getType(afterSendFeedback))}>
        {/* Button + Dialog -> Won't show if afterSendFeedback is not present. */}
        <FeedbackDialog {...props} />
      </If>
      <div className="col" styleName="userMenu">
        <If condition={isLoggedOn}>
          <LogOutMenu items={logoutItems} onItemClick={onLogoutItemClicked} />
        </If>
      </div>
    </div>
  )
}

const renderLogoAndSearchBar = ({ showSearchBar, moduleName, onRenderLogo, renderSearchbar }) => (
  <div className="flex-grid">
    <div className="appBarLeft">
      <CopartLogo />
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
    renderSearchbar,
    onRenderFlag,
    onRenderLogo,
    onFeedbackClick,
    userEmail,
    selectedYard,
    language,
    afterSendFeedback,
    homeYard,
    selectedRole,
    ...appBarProps
  } = otherProps
  return (
    <MuiAppBar
      // iconStyleRight={iconStyles}
      {...appBarProps}
      iconElementLeft={renderLogoAndSearchBar(props)}
      iconElementRight={renderAppBarElements(props)}
      data-test="AppBar"
    >
      {children}
    </MuiAppBar>
  )
}

const iconStyles = {
  marginTop: '14px',
  marginRight: '-14px',
}

AppBar.defaultProps = {
  onRenderFlag: ({ countryCode, type }: { countryCode: string, type: string }): Node => (
    <Flag countryCode={countryCode} type={type} />
  ),
  onRenderLogo: (): Node => <img className="logo" src="./public/assets/images/logo.svg" alt="Copart" />,
  config: ['flag', 'role', 'yard']
}

const wrappedAppBar = wrapMuiContext(AppBar)
export { wrappedAppBar as AppBar }