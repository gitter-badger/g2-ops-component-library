import React from 'react'
import PickupDetails from './pickupDetails'
import AdvanceChargePayment from './advanceChargePayment'
import TowProvider from './towProvider'
import ChargesTable from './chargesTable'
import './style.scss'

class BillingAndPickup extends React.Component {
  render() {
    const { isEditing } = this.props
    return (
      <div className="container">
        <div className="pickup">
          <div>
            <PickupDetails isEditing={isEditing} />
            <AdvanceChargePayment isEditing={isEditing} />
            <TowProvider isEditing={isEditing} />
          </div>
        </div>
        <div className="charges">
          <ChargesTable />
        </div>
      </div>
    )
  }
}

export default BillingAndPickup
