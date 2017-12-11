import React from "react"
import ReactDOM from "react-dom"
import ActionHome from "material-ui/svg-icons/action/home"
import moment from 'moment'
import AppBar from "./components/AppBar/"
import Button from "./components/Buttons/Button"
import DatePicker from './components/DatePicker'
import IconButton from "./components/Buttons/IconButton"

const appBarPropsCobalt = {
  type: 'cobalt',
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  role: 'Germany Office Employee',
  yardNumber: 5001,
  phoneNumber: '7834873587',
  showSearchBar: true
}

const appBarPropsCAS = {
  type: 'cas',
  config: [ 'flag', 'yard', 'phone' ],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: '7834873587',
  showSearchBar: true
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
        />
      </div>
    )
  }
}
