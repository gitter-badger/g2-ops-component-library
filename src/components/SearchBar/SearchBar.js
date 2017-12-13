import React from 'react'
import PropTypes from 'prop-types'
import renderIf from 'render-if'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button'
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox'
import Checkbox from '../Checkbox/Checkbox'
import { wrapFabricContext } from '../../wrapFabricContext'
import './style.scss'

const defaultSearchTypes = [
  { code: 'lot',
    description: 'Lot',
  },
  { code: 'seller',
    description: 'Seller',
  },
  { code: 'owner',
    description: 'Owner',
  },
  { code: 'location',
    description: 'Location',
  },
  { code: 'facility',
    description: 'Facility',
  },
  { code: 'sellerPersonnel',
    description: 'Seller Personnel',
  },
]

class SearchBar extends React.Component {
  static propTypes = {
    handleMenuChange: PropTypes.func,
    searchTypevalue: PropTypes.string,
    searchTypes: PropTypes.arrayOf(PropTypes.shape),
    handleSearch: PropTypes.func,
    showCheckbox: PropTypes.bool
  }

  state = {
    searchTypeValue: this.props.searchTypeValue || { key: 'lot', name: 'Lot' },
  }

  handleMenuChange = (event, index, value) => {
    this.setState({
      searchTypeValue: value
    }, () => {
      if(this.props.handleMenuChange) {
        this.props.handleMenuChange(event, index, value)
      }
    })
  }

  renderContextualMenu = () => (
    <DefaultButton
      className="searchTypesMenuButton"
      text={this.state.searchTypeValue.name}
      menuProps={{
        isBeakVisible: false,
        directionalHint: DirectionalHint.bottomLeftEdge,
        directionalHintForRTL: DirectionalHint.bottomLeftEdge,
        gapSpace: 0,
        beakWidth: 20,
        directionalHintFixed: true,
        onItemClick: (event, item) => this.handleMenuChange(event,null,item),
        items: [
          { key: 'lot', name: 'Lot' },
          { key: 'seller', name: 'Seller' },
          { key: 'owner', name: 'Owner' },
          { key: 'seller-personnel', name: 'Seller Personnel' },
          { key: 'facility', name: 'Facility' },
          { key: 'location', name: 'Location' },
          { key: 'buyer', name: 'Buyer' },
        ]
      }}
    />
  )

  renderSearchIcon = (handleSearch) => (
    <IconButton
      onClick={handleSearch}
      iconProps={ { iconName: 'search' } }
      title='Search'
    />
  )

  render() {
    const { searchTypeValue: searchTypeValueProps, searchTypes = defaultSearchTypes, handleSearch, showCheckbox, ...searchBarProps } = this.props
    const { searchTypeValue } = this.state
    const renderAllFacilitiesCheckbox = renderIf(searchTypeValue.key === 'lot')
    const colorStyle = { color: '#fff' }
    return (
      <div className="searchBarDiv">
        <TextField
          {...searchBarProps}
          placeholder="Type here to Search"
          className="searchBarTextField"
          onRenderPrefix={this.renderContextualMenu}
          onRenderSuffix={() => this.renderSearchIcon(handleSearch)}
        />
        {showCheckbox && renderAllFacilitiesCheckbox(
          <Checkbox
            className="searchBarCheckbox"
            label={'All Facilities'}
            styles={{
              checkboxCheckedHovered: {
                borderColor: 'black',
              },
              checkboxCheckedFocused: {
                background: '#fff',
                borderColor: '#fff'
              },
              checkboxChecked: {
                background: '#fff',
                borderColor: '#fff'
              },
              checkmark: {
                opacity: '0',
                color: 'black'
              },
              checkmarkChecked: {
                opacity: '1'
              },
              text: colorStyle,
              textHovered: colorStyle,
              textFocused: colorStyle
            }}
          />
        )}
      </div>
    )
  }
}

export default SearchBar
