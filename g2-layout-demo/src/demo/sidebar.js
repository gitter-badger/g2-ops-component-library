import React from 'react'
import './style.scss'

const imageStyle = {
  width: '250px',
  height: '200px',
  cursor: 'pointer',
  padding: '0px'
}

const sectionTextStyle = {
  color: 'black',
  fontSize: '14px'
}

const CommonInfo = () => (
  <div className="commoninfo">
    <div className="lotandviewers">
      <span className="lot">{50031301}</span>
      <span className="viewers">
        <i className="material-icons">remove_red_eye</i>
      </span>
    </div>
    <div className="description">2018 - ALFA ROMEO - 145</div>
    <div className="stage">Awaiting Trip Confirmation</div>
    <div className="image">
      <img
        src="car.jpg"
        alt="Car"
        style={imageStyle}
      />
    </div>
    <div className="section">
      <span>Facility 5001</span>
      <span style={sectionTextStyle}>COPARTDEMIGROFFSHORE</span>
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