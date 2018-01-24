import React from 'react'
import PropTypes from 'prop-types'
import renderIf from 'render-if'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button'
import Checkbox from 'components/Checkbox/Checkbox'
import { wrapFabricContext } from '../../wrapFabricContext'
import './style.scss'

class SearchBar extends React.Component {
  static propTypes = {
    /** Callback triggered when the search type changes */
    onSearchTypeChange: PropTypes.func,
    /** Search Type, one of the items of type { key,name } from the searchTypes provided  */
    searchType: PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string
    }),
    /** Search Types to be rendered in the searchMenu on the left */
    searchTypes: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string
    })),
    /** Trigger search handler */
    handleSearch: PropTypes.func.isRequired,
    /** search text to display within the Search box */
    searchText: PropTypes.string,
    /** boolean to show Checkbox */
    showCheckbox: PropTypes.bool
  }

  state = {
    searchType: this.props.searchType || { key: 'lot', name: 'Lot' },
  }

  handleMenuChange = (event, index, item) => {
    this.setState({
      searchType: item
    }, () => {
      if (this.props.onMenuChange) {
        this.props.onMenuChange(event, index, item)
      }
    })
  }

  renderSearchBarMenu = (items) => (
    <DefaultButton
      className="searchTypesMenuButton"
      text={this.state.searchType.name}
      menuProps={{
        isBeakVisible: false,
        directionalHint: DirectionalHint.bottomLeftEdge,
        directionalHintForRTL: DirectionalHint.bottomLeftEdge,
        gapSpace: 0,
        beakWidth: 20,
        directionalHintFixed: true,
        onItemClick: (event, item) => this.handleMenuChange(event, null, item),
        items: items
      }}
    />
  )

  renderSearchIcon = (handleSearch) => (
    <IconButton
      onClick={handleSearch}
      iconProps={{ iconName: 'search' }}
      title={'Search'}
    />
  )

  render() {
    const { searchType: searchTypeProp, searchTypes, handleSearch, showCheckbox, ...searchBarProps } = this.props
    const { searchType } = this.state
    const renderAllFacilitiesCheckbox = renderIf(searchType.key === 'lot')
    const colorStyle = { color: '#fff' }
    return (
      <div className="searchBarDiv">
        <TextField
          {...searchBarProps}
          placeholder="Type here to Search"
          className="searchBarTextField"
          onRenderPrefix={() => this.renderSearchBarMenu(searchTypes)}
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
              text: {
                ...colorStyle,
                fontSize: '12px'
              },
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
