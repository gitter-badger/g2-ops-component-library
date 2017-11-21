import React from "react"
import ReactDOM from "react-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import App from "./App.js"

const withMuiContext = Component => (
  <MuiThemeProvider>
    <Component />
  </MuiThemeProvider>
)

ReactDOM.render(withMuiContext(App), document.getElementById("app"))
