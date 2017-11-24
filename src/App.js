import React from "react"
import ReactDOM from "react-dom"
import AppBar from "./components/AppBar/"
import Button from "./components/Buttons/Button"
import DatePicker from './components/DatePicker'
import IconButton from "./components/Buttons/IconButton"
import ActionHome from "material-ui/svg-icons/action/home"
import moment from 'moment'

export default class App extends React.Component {
  state = {
    dateValue: null,
  }
  handleChange = (event, dateValue) => {
    this.setState({ dateValue })
  }
  render() {
    const defaultFormat = 'DD/MM/YYYY'
    return (
      <div style={{ textAlign: "center", margin: "-7px" }}>
        <AppBar
          iconElementLeft={<img src="public/images/logo.svg" alt="Copart" />}
          iconElementRight={<Button label={"Feedback"} default labelColor={"#000000"} labelStyle={{}} />}
          iconStyleRight={{ padding: "5px" }}
        >
        {this.props.children}
        </AppBar>
        <h1>Copart UI Library</h1>
        <div style={{ marginBottom: "5px" }}>
          <Button label={"Button"} />
        </div>
        <IconButton tooltip={"tooltip"} onClick={() => console.log("clicked")}>
          <ActionHome />
        </IconButton>
        <DatePicker
          autoOk
          hintText={defaultFormat}
          container="inline"
          value={this.state.dateValue}
          onChange={this.handleChange}
          floatingLabelText="Select Date"
          floatingLabelFixed
          defaultFormat={defaultFormat}
          formatDate={(date) => {
            return moment(date, defaultFormat).format(defaultFormat)
          }}
        />
      </div>
    )
  }
}
