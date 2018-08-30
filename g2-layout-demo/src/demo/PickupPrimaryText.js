import React from 'react'
import renderIf from 'render-if'

export const Row = ({ value }) => (
  <div style={{ fontSize: '12px', lineHeight: '10px', margin: '0px', paddingTop: '5px' }}>
    <span>{value}</span>
  </div>
)

const pickupTypeDesc = code =>
  ({
    D: 'Dropoff',
    O: 'Offsite',
    P: 'Pickup',
    PS: 'Post Sale',
    A: 'N/A',
  }[code])

type PropsT = {
  lot_site_nm: string,
  lot_site_type_cd: string,
  addr_line1: string,
  addr_line2: string,
  oper_cntry_cd: string,
  state_cd: string,
  postal_cd: string,
  phone_num: string,
  alt_phone_num: string,
  city: string,
  email: string,
  status: string,
}

const LocationInformation = ({ address1, address2, country, city, state, postalCode }) => (
  <div>
    <Row label={'Address'} value={address1} />
    {renderIf(address2)(<Row label={'Address 2'} value={address2} />)}
    <div style={{ fontSize: '12px', lineHeight: '10px', margin: '0px', paddingTop: '5px' }}>
      <span>{`${country} / ${city}, ${state || ''} / ${postalCode}`}</span>
    </div>
  </div>
)

const PhoneInformation = ({ phone }) => <div>{renderIf(phone)(<Row label={'Phone'} value={phone} />)}</div>

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
  vat_id: vatId,
}: PropsT) => {
  const locationInfo = {
    address1,
    address2,
    country,
    city,
    state,
    postalCode,
  }
  const phoneInfo = {
    phone,
    altPhone,
  }
  return (
    <div style={{ color: 'black', paddingTop: '0px', lineHeight: '20px', paddingBottom: '5px', margin: '0px' }}>
      <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{name}</span>
      {renderIf(locationInfo)(<LocationInformation {...locationInfo} />)}
      {renderIf(phone)(<PhoneInformation {...phoneInfo} />)}
      {renderIf(email)(<Row label={'Email'} value={email} />)}
      {renderIf(vatId)(<Row label={'VAT ID'} value={vatId} />)}
    </div>
  )
}

export default PickupPrimaryText
