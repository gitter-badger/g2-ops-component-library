import React from 'react'
import AwaitingDispatchIcon from './AwaitingDispatch.Icon'
import AwaitingTripConfirmationIcon from './AwaitingTripConfirmation.Icon'
import AwaitingDriverAssignIcon from './AwaitingDriverAssign.Icon'

export default [
  {
    label: 'Image Uploaded Date',
    name: 'imageUploadedDate',
    // selectedValues: [ '10112017' ],
    type: 'range',
    // dataType: 'date', will need it if we want range in datatype other than datepicker
    // filterOptions would be these two (from/to) always so we dont need selectedValues
    // calling application needs to handle how to send query to SOLR with these values.
    filterOptions: [
      {
        name: null,
        label: 'From',
        isSelected: false,
      },
      {
        name: null,
        label: 'To',
        isSelected: true,
      },
    ],
  },
  {
    label: 'Buyer Number',
    name: 'buyerNumber',
    selectedValues: ['323929'],
    filterOptions: [
      {
        name: '2597',
        label: '2597',
        count: 5,
        isSelected: false,
      },
      {
        name: '91908',
        label: '91908',
        count: 1,
        isSelected: false,
      },
      {
        name: '323929',
        label: '323929',
        count: 1,
        isSelected: true,
      },
    ],
  },
  {
    label: 'City',
    name: 'city',
    selectedValues: [],
    filterOptions: [
      {
        name: 'aleknagik',
        label: 'ALEKNAGIK',
        count: 1,
        isSelected: false,
      },
      {
        name: 'bakersfield',
        label: 'BAKERSFIELD',
        count: 1,
        isSelected: false,
      },
      {
        name: 'benicia',
        label: 'BENICIA',
        count: 5,
        isSelected: false,
      },
      {
        name: 'colton',
        label: 'COLTON',
        count: 1,
        isSelected: false,
      },
      {
        name: 'dallas',
        label: 'DALLAS',
        count: 1,
        isSelected: false,
      },
      {
        name: 'fairfield',
        label: 'FAIRFIELD',
        count: 4,
        isSelected: false,
      },
      {
        name: 'grassValley',
        label: 'GRASS VALLEY',
        count: 1,
        isSelected: false,
      },
      {
        name: 'houston',
        label: 'HOUSTON',
        count: 2,
        isSelected: false,
      },
      {
        name: 'null',
        label: 'NULL',
        count: 1,
        isSelected: false,
      },
      {
        name: 'reno',
        label: 'RENO',
        count: 2,
        isSelected: false,
      },
      {
        name: 'sacramento',
        label: 'SACRAMENTO',
        count: 5,
        isSelected: false,
      },
      {
        name: 'sanBernardino',
        label: 'SAN BERNARDINO',
        count: 3,
        isSelected: false,
      },
      {
        name: 'santaAna',
        label: 'SANTA ANA',
        count: 1,
        isSelected: false,
      },
      {
        name: 'santaMonica',
        label: 'SANTA MONICA',
        count: 13,
        isSelected: false,
      },
      {
        name: 'sonoma',
        label: 'SONOMA',
        count: 1,
        isSelected: false,
      },
      {
        name: 'southElMonte',
        label: 'SOUTH EL MONTE',
        count: 1,
        isSelected: false,
      },
      {
        name: 'vacaville',
        label: 'VACAVILLE',
        count: 1,
        isSelected: false,
      },
    ],
  },
]

export const quickLinks = [
  {
    count: 25,
    icon: <AwaitingDispatchIcon />,
    name: 'dispatch',
    tooltipText: 'Awaiting Dispatch',
  },
  {
    count: 450,
    icon: <AwaitingTripConfirmationIcon />,
    name: 'trip',
    tooltipText: 'Awaiting Trip Confirmation',
  },
  {
    count: 5,
    icon: <AwaitingDriverAssignIcon />,
    name: 'driver',
    tooltipText: 'Awaiting Driver Assign',
  },
]
