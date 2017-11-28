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
      <div style={{ margin: "-7px" }}>
        <AppBar
          iconElementLeft={<img src="public/images/logo.svg" alt="Copart" />}
          iconElementRight={<Button label={"Feedback"} default labelColor={"#000000"} labelStyle={{}} />}
          iconStyleRight={{ padding: "5px" }}
        >
        {this.props.children}
        </AppBar>
        <div style={{ margin: '10px' }}>
          <span style={{ margin: '10px' }}><Button type="primary" label="Copart Primary Button" /></span>
          <span style={{ margin: '10px' }}><Button type="secondary" label="Secondary Button" /></span>
          <span style={{ margin: '10px' }}><Button type="inactive" label="Inactive" /></span>
          <span style={{ margin: '10px' }}><Button type="add" /></span>
          <span style={{ margin: '10px' }}><Button type="edit" /></span>
          <span style={{ margin: '10px' }}><Button type="delete" /></span>
        </div>
      {/* <h1>DatePicker</h1>
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
          style={{
            marginLeft: '40px'
          }}
        /> */}
      </div>
    )
  }
}
