import React from 'react'
import PropTypes from 'prop-types'
import renderIf from 'render-if'
import { Row } from './commonFunctions'

const pickupTypeDesc = (code) => ({
  D: 'Dropoff',
  O: 'Offsite',
  P: 'Pickup',
  PS: 'Post Sale',
  A: 'N/A'
}[code])

const pickupPrimaryTextProptypes = {
  lot_site_nm: PropTypes.string,
  lot_site_type_cd: PropTypes.string,
  addr_line1: PropTypes.string,
  addr_line2: PropTypes.string,
  oper_cntry_cd: PropTypes.string,
  state_cd: PropTypes.string,
  postal_cd: PropTypes.string,
  phone_num: PropTypes.string,
  alt_phone_num: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string
}

const LocationInformation = ({
  address1,
  address2,
  country,
  city,
  state,
  postalCode
}) => (
  <div>
    <Row label={'Address'} value={address1} />
    {renderIf(address2)(<Row label={'Address 2'} value={address2} />)}
    <div style={{ fontSize: '12px', lineHeight: '10px', margin: '0px', paddingTop: '5px' }}>
      <span>{`${country} / ${city}, ${state || ''} / ${postalCode}`}</span>
    </div>
  </div>
)

const PhoneInformation = ({ phone }) => (
  <div>
    {renderIf(phone)(<Row label={'Phone'} value={phone} />)}
  </div>
)

const PickupPrimaryText = ({
  lot_site_nm: name,
  lot_site_type_cd: lotSiteTypeCode,
  email,
  status,
  addr_line1: address1,
  addr_line2: address2,
  oper_cntry_cd: country,
  city,
  state_cd: state,
  postal_cd: postalCode,
  phone_num: phone,
  alt_phone_num: altPhone,
  vat_id: vatId
}) => {
  const locationInfo = {
    address1,
    address2,
    country,
    city,
    state,
    postalCode
  }
  const phoneInfo = {
    phone,
    altPhone
  }
  return (
    <div style={{ color: 'black', paddingTop: '0px', lineHeight: '20px', paddingBottom: '5px', margin: '0px' }}>
      <span style={{ fontSize: '11px', fontWeight: 'bold' }}>
        {name}
      </span>
      {renderIf(locationInfo)(<LocationInformation {...locationInfo} />)}
      {renderIf(phone)(<PhoneInformation {...phoneInfo} />)}
      {renderIf(email)(<Row label={'Email'} value={email} />)}
      {renderIf(vatId)(<Row label={'VAT ID'} value={vatId} />)}
    </div>
  )
}

PickupPrimaryText.propTypes = pickupPrimaryTextProptypes

export default PickupPrimaryText
