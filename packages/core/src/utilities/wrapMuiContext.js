// @flow
import type { ComponentType, Node } from 'react'

import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initializeIcons } from '@uifabric/icons'

type ThemeType = {
  [string]: any,
}

const muiTheme = getMuiTheme()
const copartBlue = '#1d5ab9'
const niceBlue = '#4a90e2'

export const copartBaseTheme: ThemeType = {
    ...muiTheme,
  appBar: {
    ...muiTheme.appBar,
    color: copartBlue,
  },
  baseTheme: {
    ...muiTheme.baseTheme,
    palette: {
      ...muiTheme.baseTheme.palette,
      pickerHeaderColor: copartBlue,
      primary1Color: copartBlue,
      primary2Color: copartBlue,
    },
  },
  flatButton: {
    ...muiTheme.flatButton,
    primaryTextColor: copartBlue,
  },
  palette: {
    ...muiTheme.palette,
    pickerHeaderColor: copartBlue,
    primary1Color: copartBlue,
    primary2Color: copartBlue,
  },
  datePicker: {
    ...muiTheme.datePicker,
    headerColor: copartBlue,
    color: copartBlue,
    selectColor: copartBlue,
  },
  toggle: {
    ...muiTheme.toggle,
    thumbOnColor: copartBlue,
    trackOnColor: niceBlue,
  },
  timePicker: {
    ...muiTheme.timePicker,
    headerColor: copartBlue,
    accentColor: copartBlue,
    selectColor: copartBlue,
  },
  stepper: {
    ...muiTheme.stepper,
    iconColor: copartBlue,
  },
  tabs: {
    selectedTextColor: 'rgba(38, 166, 91, 1.0)',
    textColor: 'rgba(218, 223, 225, 1.0)',
  },
  inkBar: {
    backgroundColor: '#545A63',
  },
}

initializeIcons()
injectTapEventPlugin()

// a higher order function that provides mui context to the Component being passed.
export function wrapMuiContext<T>(WrapperComponent: ComponentType<T>): (T) => Node {
  return (props) => (
    <MuiThemeProvider muiTheme={copartBaseTheme}>
      <WrapperComponent {...props} />
    </MuiThemeProvider>
  )
}
