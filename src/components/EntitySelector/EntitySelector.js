import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Selector from './Selector'

const EntitySelectorPropTypes = {
  typeOfSelector: PropTypes.string
}

const EntitySelectorDefaultProps = {
  typeOfSelector: ''
}

class EntitySelector extends Component {
  static propTypes = EntitySelectorPropTypes
  static defaultProps = EntitySelectorDefaultProps
  state = {
    typeOfSelector: this.props.typeOfSelector
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
