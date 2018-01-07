import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as MuiTabs, Tab } from 'material-ui/Tabs'
import Badge from 'material-ui/Badge'
import './style.scss'
import { wrapMuiContext } from '../../wrapMuiContext'

const IconWithBadge = ({ tabConfig }) => (
  <Badge
    badgeContent={tabConfig.count}
    secondary
    badgeStyle={{ top: 8, right: 5 }}
    style={{ marginLeft: '10px', paddingBottom: '2px' }}
  >
    <IconWithoutBadge tabClassName={'tabIconDispatch'} tabConfig={tabConfig} />
  </Badge>
)

const IconWithoutBadge = ({ tabClassName = 'tabIcon', tabConfig }) => {
  if (tabConfig.iconName) {
    return <i className="material-icons">{tabConfig.iconName}</i>
  }
  return <i className={`fa ${tabConfig.iconClassName} ${tabClassName}`} />
}

const getLabelForTab = (label, labelError = label, tabHasError = false) => (tabHasError ? labelError : label)

class Tabs extends React.Component {
  static propTypes = {
    /** Config file that contains tab information */
    tabsConfig: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.any,
      /** Material icon name */
      iconName: PropTypes.string,
      /** Tab key to be used to uniquely identify tabs */
      tabKey: PropTypes.string,
      /** custom function to render Tab label for tabs having errors */
      labelError: PropTypes.any,
    })),
    /** callback when active tab changes */
    onTabActive: PropTypes.func,
    /** current active tab index */
    slideIndex: PropTypes.number,
    /** tabs which have errors */
    tabsWithErrors: PropTypes.arrayOf(PropTypes.any),
  }
  render() {
    const { slideIndex, tabsConfig, onTabActive, tabsWithErrors } = this.props
    return (
      <div>
        <MuiTabs>
          {tabsConfig && tabsConfig.map((tabConfig, index) => {
            const tabClassName = slideIndex === index ? 'tab active' : 'tab default'
            return (
              <Tab
                icon={tabConfig.showBadge ? <IconWithBadge tabConfig={tabConfig} /> : <IconWithoutBadge tabConfig={tabConfig} />}
                label={tabsWithErrors && tabsWithErrors.includes(tabConfig.tabKey) ? getLabelForTab(tabConfig.label, tabConfig.labelError, true) : tabConfig.label}
                key={index}
                value={tabConfig.tabKey}
                onActive={(activeTab) => {
                  onTabActive(activeTab, tabConfig, index)
                }}
                className={`${tabClassName} ${tabConfig.className}`}
                name={tabConfig.name}
            />
            )
          })}
        </MuiTabs>
      </div>
    )
  }
}

export default wrapMuiContext(Tabs)
