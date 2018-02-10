import React from 'react'
import PickupDetails from './pickupDetails'
import AdvanceChargePayment from './advanceChargePayment'
import TowProvider from './towProvider'
import ChargesTable from './chargesTable'
import './style.scss'

class BillingAndPickup extends React.Component {
  state = {
    tabContentHeight: window.innerHeight - 241
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    this.setState({
      tabContentHeight: window.innerHeight - 241
    })
  }
  render() {
    const { isEditing } = this.props
    return (
      <div className="col-1-1 tabBody" style={{ height: this.state.tabContentHeight, overflowY: 'auto' }}>
        <div className="col-8-12 pickup">
          <div>
            <PickupDetails isEditing={isEditing} />
            <AdvanceChargePayment isEditing={isEditing} />
            <TowProvider isEditing={isEditing} />
          </div>
        </div>
        <div className="col-4-12 charges">
          <ChargesTable />
        </div>
      </div>
    )
  }
}

export default BillingAndPickup
