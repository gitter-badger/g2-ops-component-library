import React from "react"
import ReactDOM from "react-dom"
import ActionHome from "material-ui/svg-icons/action/home"
import moment from 'moment'
import AppBar from "./components/AppBar/"
import Button from "./components/Buttons/Button"
import DatePicker from './components/DatePicker'
import IconButton from "./components/Buttons/IconButton"

const appBarPropsCobalt = {
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  role: 'Germany Office Employee',
  yardNumber: 5001,
  phoneNumber: '7834873587',
}

const appBarPropsCAS = {
  config: [ 'flag', 'yard', 'phone' ],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: '7834873587',
}

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
      <div style={{ margin: "-8px" }}>
        <AppBar
          {...appBarPropsCobalt}
        >
        {this.props.children}
        </AppBar>
        <AppBar
          {...appBarPropsCAS}
        >
        {this.props.children}
        </AppBar>
        <div style={{ margin: '20px' }}>
          <h1>Buttons</h1>
          <span style={{ marginRight: '10px' }}><Button type="primary" label="Copart Primary Button" /></span>
          <span style={{ marginRight: '10px' }}><Button type="secondary" label="Secondary Button" /></span>
          <span style={{ marginRight: '10px' }}><Button type="inactive" label="Inactive" /></span>
          <span style={{ marginRight: '10px' }}><Button type="add" /></span>
          <span style={{ marginRight: '10px' }}><Button type="edit" /></span>
          <span style={{ marginRight: '10px' }}><Button type="delete" /></span>
        </div>
        <div style={{ margin: '20px' }}>
          <h1>DatePicker</h1>
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
      </div>
    )
  }
}
