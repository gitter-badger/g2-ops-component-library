// @flow
import React, { PureComponent } from 'react'
import renderIf from 'render-if'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { DefaultButton, IconButton } from 'office-ui-fabric-react/lib/Button'

import { Checkbox } from 'components/Checkbox/Checkbox'

import wrapFabricContext from '../../wrapFabricContext'
import { checkboxStyle } from './SearchBar.style'

import './style.scss'

type SearchType = {
  key: string,
  name: string,
}

type SearchBarPropType = {
  /** Search Type, one of the items of type { key,name } from the searchTypes provided  */
  searchType: SearchType,
  /** Search Types to be rendered in the searchMenu on the left */
  searchTypes: Array<SearchType>,
  /** Trigger search handler */
  handleSearch(): any,
  /** search text to display within the Search box */
  searchText: string,
  /** boolean to show Checkbox */
  showCheckbox: boolean,
  /** Callback triggered when the search type changes */
  onSearchTypeChange?: SearchType => any,
}

type SearchBarStateType = {
  searchType: SearchType,
}

class SearchBar extends PureComponent<SearchBarPropType, SearchBarStateType> {
  state = {
    searchType: this.props.searchType || { key: 'lot', name: 'Lot' },
  }

  handleMenuChange = (event: SyntheticMouseEvent<HTMLInputElement>, item: SearchType) => {
    this.setState({
      searchType: item,
    })
    if (this.props.onSearchTypeChange) {
      this.props.onSearchTypeChange(item)
    }
  }

  renderSearchBarMenu = () => {
    const { searchTypes } = this.props
    return (
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
          onItemClick: this.handleMenuChange,
          items: searchTypes,
        }}
      />
    )
  }

  renderSearchIcon = () => (
    <IconButton onClick={this.props.handleSearch} iconProps={{ iconName: 'search' }} title={'Search'} />
  )

  render() {
    const { searchType: searchTypeProp, showCheckbox, ...searchBarProps } = this.props
    const { searchType } = this.state
    const renderAllFacilitiesCheckbox = renderIf(searchType.key === 'lot' && showCheckbox)
    return (
      <div className="searchBarDiv">
        <TextField
          {...searchBarProps}
          placeholder="Type here to Search"
          className="searchBarTextField"
          onRenderPrefix={this.renderSearchBarMenu}
          onRenderSuffix={this.renderSearchIcon}
        />
        {renderAllFacilitiesCheckbox(
          <Checkbox className="searchBarCheckbox" label={'All Facilities'} styles={checkboxStyle} />,
        )}
      </div>
    )
  }
}

export default SearchBar
