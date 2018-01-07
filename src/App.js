import React from "react"
import ReactDOM from "react-dom"
import ActionHome from "material-ui/svg-icons/action/home"
import moment from 'moment'
import AppBar from "components/AppBar/"
import Button from "components/Buttons/Button"
import DatePicker from 'components/DatePicker'
import IconButton from "components/Buttons/IconButton"

const appBarPropsCobalt = {
  type: 'cobalt',
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  role: 'Germany Office Employee',
  yardNumber: 5001,
  phoneNumber: '7834873587',
  showSearchBar: true,
  showCheckbox: true,
  moduleName: 'Cobalt Portal'
}

const appBarPropsCAS = {
  type: 'cas',
  config: [ 'flag', 'yard', 'phone' ],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: '7834873587',
  showSearchBar: true,
  showCheckbox: true,
  moduleName: 'CAS Portal'
}

const logoutItems = [{
  key: 'userName',
  name: 'Sidharth Mehra'
},
{
  key: 'settings',
  name: 'Settings'
},
{
  key: 'logout',
  name: 'Logout'
}]

export default class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "-8px" }}>
        <AppBar
          {...appBarPropsCobalt}
          onLogoutItemClicked={(event, item) => console.log(item)}
          logoutItems={logoutItems}
          onFeedbackClick={() => console.log('Feedback clicked')}
        />
      </div>
    )
  }
}
