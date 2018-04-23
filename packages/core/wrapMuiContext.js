// @flow
import type { ComponentType, Node } from 'react'

import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import { initializeIcons } from '@uifabric/icons'

type ThemeType = {
  [string]: any,
}

export const copartBaseTheme: ThemeType = {
  ...lightBaseTheme,
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: '#1d5ab9',
    primary2Color: '#1d5ab9',
  },
  datePicker: {
    ...lightBaseTheme.datePicker,
    headerColor: '#1d5ab9',
  },
  timePicker: {
    ...lightBaseTheme.timepicker,
    headerColor: '#1d5ab9',
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
    <MuiThemeProvider muiTheme={getMuiTheme(copartBaseTheme)}>
      <WrapperComponent {...props} />
    </MuiThemeProvider>
  )
}
