// @flow
import type { OptionsType, FlattenedOptionType } from 'types/HierarchySelector'

import React, { PureComponent } from 'react'
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import renderIf from 'render-if'

import Autoselect from '../AutoSelect'
import { wrapMuiContext } from '../../wrapMuiContext'
import { flattenNestedOptions } from './hierarchySelector.transformer'

type HierarchySelectorPropType = {
  options: OptionsType,
}

type HierarchySelectorStateType = {
  flattenedOptions: Array<FlattenedOptionType>,
}

const DownArrowIcon = wrapMuiContext(DownArrow)

class HierarchySelector extends PureComponent<HierarchySelectorPropType, HierarchySelectorStateType> {
  constructor(props: HierarchySelectorPropType) {
    super(props)
    const { options } = props
    this.state = {
      flattenedOptions: flattenNestedOptions(options),
    }
  }

  componentWillReceiveProps(nextProps: HierarchySelectorPropType) {
    if (nextProps.options !== this.props.options) {
      this.setState((prevState) => ({
        ...prevState,
        flattenedOptions: flattenNestedOptions(nextProps.options),
      }))
    }
  }

  renderOption = (option: FlattenedOptionType) => {
    const numberOfSpaces = option.path.length
    const renderIfHaveChildren = renderIf(option.haveChildren)
    return (
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: `${(numberOfSpaces - 1) * 30}px` }}>
        <div style={{ width: '15px', height: '15px', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
          {renderIfHaveChildren(<i className="material-icons">arrow_drop_down</i>)}
        </div>
        <div>{option.label}</div>
      </div>
    )
  }

  render() {
    const { flattenedOptions } = this.state
    return (
      <div className="HierarchySelector">
        <AutoSelect {...this.props} options={flattenedOptions} displayOption={this.renderOption} />
      </div>
    )
  }
}

export default HierarchySelector
