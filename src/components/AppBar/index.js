import React from "react"
import MuiAppBar from "material-ui/AppBar"
import IconButton from "material-ui/IconButton"
import NavigationClose from "material-ui/svg-icons/navigation/close"
import FlatButton from "material-ui/FlatButton"

const styles = {
  toolbar: {
    backgroundColor: "#1d5ab9",
  },
}

const AppBar = props => (
  <MuiAppBar style={styles.toolbar} {...props}>
    {props.children}
  </MuiAppBar>
)

export default AppBar
