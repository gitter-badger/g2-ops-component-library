import React, { Component } from 'react'
import Selector from './Selector'

type EntitySelectorPropTypes = {
  typeOfSelector: string,
}

const EntitySelectorDefaultProps = {
  typeOfSelector: '',
}

class EntitySelector extends Component<EntitySelectorPropTypes> {
  static defaultProps = EntitySelectorDefaultProps

  state = {
    typeOfSelector: this.props.typeOfSelector,
  }

  render() {
    return (
      <div>
        <Selector {...this.props} />
      </div>
    )
  }
}

export default EntitySelector
