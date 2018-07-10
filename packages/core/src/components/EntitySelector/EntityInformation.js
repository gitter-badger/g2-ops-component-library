import React, { Component } from 'react'
import renderIf from 'render-if'
import './styles.scss'

const EntityInformation = ({ valueEntity = {} }) => {
  const {
    lot_site_nm: name,
    email,
    addr_line1: address1,
    addr_line2: address2,
    oper_cntry_cd: country,
    city,
    state_cd: state,
    postal_cd: postalCode,
    phone_num: phone,
    alt_phone_num: altPhone,
    vat_id: vatId
  } = valueEntity
  const renderIfValueEntity = renderIf(name)
  return (
    renderIfValueEntity(
      <table style={{ width: '80%', float: 'right', borderCollapse: 'collapse', fontSize: '14px' }}>
        <tbody>
          <tr>
            <td>
              <i className="material-icons md-dark md-18">location_on</i>
            </td>
            <td>{`${address1}, ${address2}`}</td>
          </tr>
          <tr>
            <td />
            <td>{`${country} / ${city}, ${state} / ${postalCode}`}</td>
          </tr>
          <tr>
            <td>
              <i className="material-icons md-dark md-18">phone</i>
            </td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td />
            <td>{altPhone}</td>
          </tr>
          <tr>
            <td>
              <i className="material-icons md-dark md-18">email</i>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td />
            <td>{vatId ? `VAT ID ${vatId}` : ''}</td>
          </tr>
        </tbody>
      </table>
    )
  )
}

export default EntityInformation
