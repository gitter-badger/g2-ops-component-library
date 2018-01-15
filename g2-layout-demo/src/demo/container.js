import React from 'react'
import { Tabs } from 'ops-portal-component-library'
import tabsConfig from './tabsConfig'
import BottomNav from './bottomNav'
import BillingAndPickup from './billingAndPickup'
import CommonInfo from './sidebar'
import './style.scss'

class Container extends React.Component {
  state = {
    slideIndex: 2
  }
  render() {
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
              slideIndex={this.state.slideIndex}
            />
            <BillingAndPickup />
          </div>
        </div>
        <div className="bottomnav">
          <BottomNav />
        </div>
      </div>
    )
  }
}

export default Container
