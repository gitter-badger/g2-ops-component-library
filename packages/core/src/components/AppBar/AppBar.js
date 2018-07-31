// @flow
import type { Node, Element, ChildrenArray } from 'react'

import * as React from 'react'
import { type as getType } from 'ramda'

import MuiAppBar from 'material-ui/AppBar'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { LogOutMenu } from './LogOutMenu'
import { wrapMuiContext } from 'utilities/wrapMuiContext'
import { FeedbackDialog } from 'components/FeedbackDialog'

import './AppBar.scss'
import './AppBar.pcss'

// TODO: Test
// TODO: Move into utilities file.
const allTruthy = (conditions: Function[]): Boolean => {
  // If any one of the conditions evaluates to false
  // then we want to return false, regardless of the
  // other conditionals' outcomes. Thus; the for..of
  // loop is used to exit early if we get a failing
  // condition.
  for (const condition of conditions) {
    if (!condition()) {
      return false 
    }
  }

  return true
}

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
    onFeedbackClick,
    onRenderFlag,
    onRenderLogo,
  } = props
  return (
    <div className="flex-grid" styleName="AppBarRight">
      <div className="col element" styleName="roleAndFlag">
        <If condition={props.config.includes('flag') && props.isLoggedOn}>
          {onRenderFlag({ countryCode, type })}
        </If>
        <If condition={props.config.includes('role') && props.isLoggedOn}>
          <div className="text role">{role}</div>
        </If>
      </div>
      <If condition={props.config.includes('yard') && props.isLoggedOn}>
        <div className="col element" styleName="yardNumber">
          <i className="material-icons">domain</i>
          <div className="iconText yardNumber">{yardNumber}</div>
        </div>
      </If>
      <div className="col" styleName="userMenu">
        <If condition={props.isLoggedOn}>
          <LogOutMenu items={logoutItems} onItemClick={onLogoutItemClicked} />
        </If>
      </div>
      <If condition={['Function'].includes(getType(props.afterSendFeedback))}>
        {/* Button + Dialog -> Won't show if afterSendFeedback is not present. */}
        <FeedbackDialog {...props} />
      </If>
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
      iconStyleRight={{
        marginTop: '14px',
        marginRight: '-14px',
      }}
      {...appBarProps}
      iconElementLeft={renderLogoAndSearchBar(props)}
      iconElementRight={renderAppBarElements(props)}
      data-core-component="AppBar"
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
  config: ['flag', 'role', 'yard']
}

const wrappedAppBar = wrapMuiContext(AppBar)
export { wrappedAppBar as AppBar }