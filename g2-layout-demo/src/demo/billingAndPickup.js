import React from 'react'
import PickupDetails from './pickupDetails'
import AdvanceChargePayment from './advanceChargePayment'
import TowProvider from './towProvider'
import './style.scss'

class BillingAndPickup extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="pickup">
          <div>
            <PickupDetails />
            <AdvanceChargePayment />
            <div className="section header">
              <span style={{ paddingLeft: '10px' }}>Tow Provider</span>
            </div>
            <TowProvider />
          </div>
        </div>
        <div className="charges">
          <div className="section header">
            <span style={{ paddingLeft: '10px' }}>Seller Billing</span>
          </div>
        </div>
      </div>
    )
  }
}

export default BillingAndPickup
