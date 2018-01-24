import React from 'react'

export const booleanHumanMap = (value) =>
  ({
    true: 'Yes',
    false: 'No'
  }[value])

export const primaryTextStyle = {
  fontSize: '12px',
  lineHeight: '14px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

export const Row = ({ value }) => (
  <div style={{ fontSize: '12px', lineHeight: '10px', margin: '0px', paddingTop: '5px' }}>
    <span>{value}</span>
  </div>
)

export const TwoValueRow = ({ label1, value1, label2, value2 }) => (
  <div style={primaryTextStyle}>
    <span>{`${label1}: ${value1} | ${label2}: ${value2}`}</span>
  </div>
)
