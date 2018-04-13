import React from 'react'
import ReactDOM from 'react-dom'
import ActionHome from 'material-ui/svg-icons/action/home'
import moment from 'moment'
import AppBar from 'components/AppBar/'
import SearchBar from 'components/SearchBar/SearchBar'

const appBarPropsCobalt = {
  type: 'cobalt',
  config: ['flag', 'role', 'yard'],
  isLoggedOn: true,
  countryCode: 'de',
  role: 'Germany Office Employee',
  yardNumber: 5001,
  phoneNumber: '7834873587',
  showSearchBar: true,
  moduleName: 'Cobalt Portal',
}

const appBarPropsCAS = {
  type: 'cas',
  config: ['flag', 'yard', 'phone'],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: '7834873587',
  showSearchBar: true,
  moduleName: 'CAS Portal',
}

const logoutItems = [
  {
    key: 'userName',
    name: 'Sidharth Mehra',
  },
  {
    key: 'settings',
    name: 'Settings',
  },
  {
    key: 'logout',
    name: 'Logout',
  },
]

const searchTypes = [
  { key: 'lot', name: 'Lot' },
  { key: 'seller', name: 'Seller' },
  { key: 'owner', name: 'Owner' },
  { key: 'seller-personnel', name: 'Seller Personnel' },
  { key: 'facility', name: 'Facility' },
  { key: 'location', name: 'Location' },
  { key: 'buyer', name: 'Buyer' },
]

export default props => {
  return (
    <div style={{ margin: '-8px' }}>
      <AppBar
        {...appBarPropsCobalt}
        onLogoutItemClicked={(event, item) => console.log(item)}
        logoutItems={logoutItems}
        onFeedbackClick={() => console.log('Feedback clicked')}
        onRenderSearchBar={() => (
          <SearchBar
            searchType={{ key: 'lot', name: 'Lot' }}
            searchTypes={searchTypes}
            borderless
            searchText="Default Search Text"
            handleSearch={() => console.log('Search Clicked')}
            showCheckbox
          />
        )}
      />
    </div>
  )
}
