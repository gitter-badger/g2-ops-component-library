import React from 'react'
import { Tabs } from 'ops-portal-component-library'
import tabsConfig from './tabsConfig'
import BottomNav from './bottomNav'
import BillingAndPickup from './billingAndPickup'
import CommonInfo from './sidebar'
import './style.scss'

class Container extends React.Component {
  state = {
    slideIndex: 2,
    isEditing: false,
  }
  render() {
    const { isEditing, slideIndex } = this.state
    return (
      <div>
        <div className="container">
          <div className="sidebar">
            <CommonInfo />
          </div>
          <div className="tabs">
            <Tabs
              tabsConfig={tabsConfig}
              onTabActive={(activeTab, tabConfig, index) => this.setState({ slideIndex: index })}
              slideIndex={slideIndex}
            />
            <BillingAndPickup isEditing={isEditing} />
          </div>
        </div>
        <div className="bottomnav">
          <BottomNav
            isEditing={isEditing}
            onToggleEdit={() => this.setState({ isEditing: !isEditing })}
          />
        </div>
      </div>
    )
  }
}

export default Container
