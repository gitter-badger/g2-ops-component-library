import React from 'react'
import AwaitingDispatchIcon from './AwaitingDispatch.Icon'
import AwaitingTripConfirmationIcon from './AwaitingTripConfirmation.Icon'
import AwaitingDriverAssignIcon from './AwaitingDriverAssign.Icon'

export default [
  {
    label: 'Date',
    name: 'imageUploadedDate',
    selectedValues: [ '10112017' ],
    type: 'range',
    dataType: 'date',
    filterOptions: [
      {
        name: '10122017',
        label: 'From',
        count: 5,
        isSelected: false,
      },
      {
        name: '10112017',
        label: 'To',
        count: 1,
        isSelected: true,
      },
    ],
  },
  {
    label: 'Buyer Number',
    name: 'buyerNumber',
    selectedValues: [ '323929' ],
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
        name: 'ALEKNAGIK',
        label: 'ALEKNAGIK',
        count: 1,
        isSelected: false,
      },
      {
        name: 'BAKERSFIELD',
        label: 'BAKERSFIELD',
        count: 1,
        isSelected: false,
      },
      {
        name: 'BENICIA',
        label: 'BENICIA',
        count: 5,
        isSelected: false,
      },
      {
        name: 'COLTON',
        label: 'COLTON',
        count: 1,
        isSelected: false,
      },
      {
        name: 'DALLAS',
        label: 'DALLAS',
        count: 1,
        isSelected: false,
      },
      {
        name: 'FAIRFIELD',
        label: 'FAIRFIELD',
        count: 4,
        isSelected: false,
      },
      {
        name: 'GRASS VALLEY',
        label: 'GRASS VALLEY',
        count: 1,
        isSelected: false,
      },
      {
        name: 'HOUSTON',
        label: 'HOUSTON',
        count: 2,
        isSelected: false,
      },
      {
        name: 'NULL',
        label: 'NULL',
        count: 1,
        isSelected: false,
      },
      {
        name: 'RENO',
        label: 'RENO',
        count: 2,
        isSelected: false,
      },
      {
        name: 'SACRAMENTO',
        label: 'SACRAMENTO',
        count: 5,
        isSelected: false,
      },
      {
        name: 'SAN BERNARDINO',
        label: 'SAN BERNARDINO',
        count: 3,
        isSelected: false,
      },
      {
        name: 'SANTA ANA',
        label: 'SANTA ANA',
        count: 1,
        isSelected: false,
      },
      {
        name: 'SANTA MONICA',
        label: 'SANTA MONICA',
        count: 13,
        isSelected: false,
      },
      {
        name: 'SONOMA',
        label: 'SONOMA',
        count: 1,
        isSelected: false,
      },
      {
        name: 'SOUTH EL MONTE',
        label: 'SOUTH EL MONTE',
        count: 1,
        isSelected: false,
      },
      {
        name: 'VACAVILLE',
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
