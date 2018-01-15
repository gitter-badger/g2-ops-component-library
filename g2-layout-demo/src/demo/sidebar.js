import React from 'react'
import './style.scss'

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
  </div>
)

export default CommonInfo