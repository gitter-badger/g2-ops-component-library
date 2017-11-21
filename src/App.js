import React from "react"
import ReactDOM from "react-dom"
import Button from "./components/Buttons/Button"
import IconButton from "./components/Buttons/IconButton"
import ActionHome from "material-ui/svg-icons/action/home"

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Copart UI Library</h1>
        <div style={{ marginBottom: "5px" }}>
          <Button primary label={"Primary Button"} />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <Button secondary label={"Secondary Button"} />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <Button default label={"Default Button"} />
        </div>
        <IconButton tooltip={"tooltip"} onClick={() => console.log("clicked")}>
          <ActionHome />
        </IconButton>
      </div>
    )
  }
}
