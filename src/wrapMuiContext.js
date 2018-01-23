import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { initializeIcons } from '@uifabric/icons'

const copartBaseTheme = {
  ...lightBaseTheme,
  palette: {
    ...lightBaseTheme.palette,
    primary1Color: '#1d5ab9',
    primary2Color: '#1d5ab9'
  },
  timePicker: {
    ...lightBaseTheme.timepicker,
    headerColor: '#1d5ab9'
  },
  tabs: {
    selectedTextColor: 'rgba(38, 166, 91, 1.0)',
    textColor: 'rgba(218, 223, 225, 1.0)'
  },
  inkBar: {
    backgroundColor: '#545A63'
  }
}

initializeIcons()
injectTapEventPlugin()

// a higher order function that provides mui context to the Component being passed.
export const wrapMuiContext = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(copartBaseTheme)}>
          <Component {...this.props} />
        </MuiThemeProvider>
      )
    }
  }
}
