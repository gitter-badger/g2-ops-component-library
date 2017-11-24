import React from "react"
import ReactDOM from "react-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from "material-ui/styles/getMuiTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import App from "./App.js"

const withMuiContext = Component => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Component />
  </MuiThemeProvider>
)

injectTapEventPlugin();

ReactDOM.render(withMuiContext(App), document.getElementById("app"))
