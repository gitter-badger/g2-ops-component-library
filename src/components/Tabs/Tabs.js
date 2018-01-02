import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as MuiTabs, Tab } from 'material-ui/Tabs'
import Badge from 'material-ui/Badge'
import style from './style'
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

const generateStyles = (slideIndex) => {
  style.tab = []
  style.tab[0] = style.default_tab
  style.tab[1] = style.default_tab
  style.tab[2] = style.default_tab
  style.tab[3] = style.default_tab
  style.tab[4] = style.default_tab
  style.tab[5] = style.default_tab
  style.tab[6] = style.default_tab
  style.tab[7] = style.default_tab
  style.tab[8] = style.default_tab
  style.tab[slideIndex] = { ...style.tab[slideIndex], ...style.active_tab }
  return style.tab
}

const renderTab = (tabConfig, index, slideIndex, onTabActive, tabsWithErrors) => {
  // A temorary solution to override active tab CSS. Refactor the following code later.
  style.tab = generateStyles(slideIndex)
  return (
    <Tab
      icon={tabConfig.showBadge ? <IconWithBadge tabConfig={tabConfig} /> : <IconWithoutBadge tabConfig={tabConfig} />}
      label={tabsWithErrors && tabsWithErrors.includes(tabConfig.tabKey) ? getLabelForTab(tabConfig.label, tabConfig.labelError, true) : tabConfig.label}
      key={index}
      value={tabConfig.tabKey}
      onActive={(activeTab) => {
        onTabActive(activeTab, tabConfig, index)
      }}
      style={style.tab[index]}
      className={tabConfig.className}
      name={tabConfig.name}
    />
  )
}

class Tabs extends React.Component {
  static propTypes = {
    tabsConfig: PropTypes.arrayOf(PropTypes.shape()),
    onTabActive: PropTypes.func,
    slideIndex: PropTypes.number,
    tabsWithErrors: PropTypes.arrayOf(PropTypes.any),
  }
  render() {
    const { slideIndex, tabsConfig, onTabActive, tabsWithErrors } = this.props
    return (
      <div>
        <MuiTabs ref="tabs" tabItemContainerStyle={style.tabItemContainer}>
          {tabsConfig && tabsConfig.map((tabConfig, index) =>
            renderTab(tabConfig, index, slideIndex, onTabActive, tabsWithErrors)
          )}
        </MuiTabs>
      </div>
    )
  }
}

export default wrapMuiContext(Tabs)
