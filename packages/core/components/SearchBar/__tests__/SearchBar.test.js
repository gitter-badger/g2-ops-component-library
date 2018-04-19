import React from 'react'
import renderer from 'react-test-renderer'

import {SearchBar} from '../SearchBar'

const searchTypes = [
  { key: 'lot', name: 'Lot' },
  { key: 'seller', name: 'Seller' },
  { key: 'owner', name: 'Owner' },
  { key: 'seller-personnel', name: 'Seller Personnel' },
  { key: 'facility', name: 'Facility' },
  { key: 'location', name: 'Location' },
  { key: 'buyer', name: 'Buyer' },
]

describe('<SearchBar />', () => {
  test('should render properly', () => {
    const tree = renderer.create(
      <SearchBar
        searchType={{ key: 'lot', name: 'Lot' }}
        searchTypes={searchTypes}
        borderless
        searchText="Default Search Text"
        handleSearch={() => console.log('Search Clicked')}
        showCheckbox={false}
      />,
    )
    expect(tree).toMatchSnapshot()
  })
  test('should render allFacilitiesCheckbox when searchType = "lot" & showCheckbox="true"', () => {
    const tree = renderer.create(
      <SearchBar
        searchType={{ key: 'lot', name: 'Lot' }}
        searchTypes={searchTypes}
        borderless
        searchText="Default Search Text"
        handleSearch={() => console.log('Search Clicked')}
        showCheckbox={false}
      />,
    )
    expect(tree).toMatchSnapshot()
  })
})
