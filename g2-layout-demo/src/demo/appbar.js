import React from 'react'
import { AppBar, SearchBar } from 'ops-portal-component-library'

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

const searchTypes = [
{ key: 'lot', name: 'Lot' },
{ key: 'seller', name: 'Seller' },
{ key: 'owner', name: 'Owner' },
{ key: 'seller-personnel', name: 'Seller Personnel' },
{ key: 'facility', name: 'Facility' },
{ key: 'location', name: 'Location' },
{ key: 'buyer', name: 'Buyer' },
]

const configCobalt = {
  type: 'cobalt',
  config: [ 'flag', 'role', 'yard' ],
  isLoggedOn: true,
  countryCode: 'de',
  yardNumber: 5001,
  role: 'Germany Executive',
  showSearchBar: true,
  moduleName: 'Cobalt Portal'
}

const flagMapper = {
  'ca': 'canada'
}

const Flag = ({ countryCode, type }) => {
  const imgProps = type === 'cas' ? { height: '22px' } : { height: '30px' }
  return (
    <img
      src={`flag_${flagMapper[countryCode] || countryCode}.png`}
      alt="Flag"
      {...imgProps}
    />
  )
}

const AppBarComponent = () => {
  const config = { ...configCobalt }
  return (
    <AppBar
      {...config}
      onLogoutItemClicked={(event, item) => console.log(item)}
      logoutItems={logoutItems}
      onFeedbackClick={() => console.log('Feedback clicked')}
      onRenderSearchBar={() => (
        <SearchBar
          searchType={{ key: 'lot', name: 'Lot' }}
          searchTypes={searchTypes}
          borderless
          searchText='Default Search Text'
          handleSearch={() => console.log('Search Clicked')}
          showCheckbox={true}
        />
      )}
      onRenderLogo={() => (
        <img
          className="logo"
          src="logo.svg"
          alt="Copart"
        />
      )}
      onRenderFlag={() => <Flag countryCode={config.countryCode} type={config.type} /> }
    />
  )
}

export default AppBarComponent
