import React from 'react'
import { IconButton } from '@copart/core-components'
import './style.scss'

const imageStyle = {
  width: '250px',
  height: '200px',
  cursor: 'pointer',
  padding: '0px',
}

const sectionTextStyle = {
  color: 'black',
  fontSize: '14px',
}

const CommonInfo = () => (
  <div className="commoninfo">
    <div className="lotandviewers">
      <span className="lot">{50031301}</span>
    </div>
    <div className="description">2018 - ALFA ROMEO - 145</div>
    <div className="stage">Awaiting Trip Confirmation</div>
    <div className="image">
      <img src="car.jpg" alt="Car" style={imageStyle} />
    </div>
    <div className="section">
      <span>Facility</span>
      <span style={sectionTextStyle}>
        5001
        <IconButton
          tooltip="Facility Info"
          style={{ float: 'right', right: '15px', margin: '-18px' }}
          onClick={() => console.log('Facility info icon clicked')}
        >
          <i className="material-icons md-dark md-22">info</i>
        </IconButton>
      </span>
    </div>
    <div className="section">
      <span>Vehicle Identification Number</span>
      <span style={sectionTextStyle}>1GNSCJE00DR177753</span>
    </div>
    <div className="section">
      <span>Seller</span>
      <span style={sectionTextStyle}>A1-DE-NonInsu Seller-Storage-Pricing-Integration-DoNotEdit</span>
    </div>
  </div>
)

export default CommonInfo
