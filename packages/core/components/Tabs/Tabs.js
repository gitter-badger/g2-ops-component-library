// @flow

import type { Node } from 'react'

import React from 'react'
import { Tabs as MuiTabs, Tab } from 'material-ui/Tabs'
import Badge from 'material-ui/Badge'

import { wrapMuiContext } from '../../wrapMuiContext'

import './styles.scss'

type TabsConfig = {
  label: Node | string,
  /** Material icon name */
  iconName: string,
  /** Tab key to be used to uniquely identify tabs */
  tabKey: string,
  /** custom function to render Tab label for tabs having errors */
  labelError: Node | string,
  /** class name for icon */
  iconClassName: string,
  /** Count for the Tab badge */
  count: number,
  /** class name for Tab */
  className: string,
  /** name for Tab label */
  name: string,
  showBadge: boolean,
}

type TabsPropType = {
  /** Config file that contains tab information */
  tabsConfig: Array<TabsConfig>,
  /** callback when active tab changes */
  onTabActive: (number, TabsConfig, number) => void,
  /** current active tab index */
  slideIndex: number,
  /** tabs which have errors */
  tabsWithErrors: Array<string>,
}

type IconWithBadgePropType = {
  tabConfig: TabsConfig,
}

const IconWithBadge = ({ tabConfig }: IconWithBadgePropType): Node => (
  <Badge
    badgeContent={tabConfig.count}
    secondary
    badgeStyle={{ top: 8, right: 5 }}
    style={{ marginLeft: '10px', paddingBottom: '2px' }}
  >
    <IconWithoutBadge tabClassName={'tabIconDispatch'} tabConfig={tabConfig} />
  </Badge>
)

type IconWithoutBadgePropType = {
  tabClassName?: string,
  tabConfig: TabsConfig,
}

const IconWithoutBadge = ({ tabClassName = 'tabIcon', tabConfig }: IconWithoutBadgePropType): Node => {
  if (tabConfig.iconName) {
    return <i className="material-icons">{tabConfig.iconName}</i>
  }
  return <i className={`fa ${tabConfig.iconClassName} ${tabClassName}`} />
}

const getLabelForTab = (label: string, labelError: Node | string = label, tabHasError: boolean = false) =>
  tabHasError ? labelError : label

const Tabs = ({ slideIndex, tabsConfig, onTabActive, tabsWithErrors }: TabsPropType) => (
  <MuiTabs className="tabs">
    {tabsConfig &&
      tabsConfig.map((tabConfig, index) => {
        const tabClassName = slideIndex === index ? 'tab active' : 'tab default'
        return (
          <Tab
            icon={
              tabConfig.showBadge ? <IconWithBadge tabConfig={tabConfig} /> : <IconWithoutBadge tabConfig={tabConfig} />
            }
            label={
              tabsWithErrors && tabsWithErrors.includes(tabConfig.tabKey)
                ? getLabelForTab(tabConfig.label, tabConfig.labelError, true)
                : tabConfig.label
            }
            key={tabConfig.tabKey}
            value={tabConfig.tabKey}
            onActive={(activeTab: number) => {
              onTabActive(activeTab, tabConfig, index)
            }}
            className={`${tabClassName} ${tabConfig.className}`}
            name={tabConfig.name}
          />
        )
      })}
  </MuiTabs>
)

export default wrapMuiContext(Tabs)
