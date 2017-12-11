import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox'
import { wrapMuiContext } from  '../../wrapMuiContext'
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
    handleSearch: PropTypes.func
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
    <Fabric>
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
    </Fabric>
  )

  renderSearchIcon = () => (
    <IconButton onClick={this.props.handleSearch}>
      <i className="material-icons">search</i>
    </IconButton>
  )

  render() {
    const { searchTypeValue, searchTypes = defaultSearchTypes, ...otherProps } = this.props
    return (
      <TextField
        borderless={true}
        placeholder="Type here to Search"
        className="searchBarTextField"
        onRenderPrefix={this.renderContextualMenu}
        onRenderSuffix={this.renderSearchIcon}
      />
    )
  }
}

export default wrapMuiContext(SearchBar)
