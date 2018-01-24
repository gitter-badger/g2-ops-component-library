import React from 'react'
import './tabConfigStyle.scss'

const SELLER_AND_CONTACT = 'sellerAndContact'
const LOT_INFORMATION = 'lotInformation'
const BILLING_AND_PICKUP = 'billingAndPickup'
const OWNERSHIP_DOCUMENTS = 'ownershipDocuments'
const SALE_TO_MEMBER = 'saleToMember'
const CRITICAL_DATES = 'criticalDates'
const VIRTUAL_BID_LOG = 'virtualBidLog'
const SERVICE_ORDER = 'serviceOrder'

const label = (labelText) => <span className={'tabLabel'}>{labelText}</span>

export default [
  {
    label: label('Seller And Contact'),
    iconName: 'assignment_turned_in',
    tabKey: SELLER_AND_CONTACT,
    labelError: label('Seller And Contact *'),
  },
  {
    label: label('Lot Information'),
    iconName: 'assignment',
    tabKey: LOT_INFORMATION,
    labelError: label('Lot Information *'),
  },
  {
    label: label('Billing And Pickup'),
    iconName: 'attach_money',
    tabKey: BILLING_AND_PICKUP,
    labelError: label('Billing And Pickup *'),
  },
  {
    label: label('Service Order'),
    iconName: 'receipt',
    tabKey: SERVICE_ORDER,
    labelError: label('Service Order *'),
  },
  {
    label: label('Ownership Documents'),
    iconName: 'work',
    tabKey: OWNERSHIP_DOCUMENTS,
    labelError: label('Ownership Documents *'),
  },
  {
    label: label('Critical Dates'),
    iconName: 'event',
    tabKey: CRITICAL_DATES,
    labelError: label('Critical Dates *'),
  },
  {
    label: label('Auction'),
    iconName: 'gavel',
    tabKey: VIRTUAL_BID_LOG,
    labelError: label('Auction *'),
  },
  {
    label: label('Sale To Member'),
    iconName: 'shopping_basket',
    tabKey: SALE_TO_MEMBER,
    labelError: label('Sale To Member *'),
  },
]
