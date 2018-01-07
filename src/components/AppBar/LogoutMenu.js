import * as React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { wrapFabricContext } from '../../wrapFabricContext'
import './style.scss'
export class LogoutMenu extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
    onItemClick: PropTypes.func,
  }
  state = {
    directionalHint: DirectionalHint.bottomCenter,
    directionalHintForRTL: DirectionalHint.bottomCenter,
    useDirectionalHintForRtl: false,
    gapSpace: 0,
    beakWidth: 20,
    edgeFixed: false
  }
  onRenderIcon = () => <i className="material-icons md-light">account_circle</i>
  onRenderMenuIcon = () => {}
  render() {
    const {
      beakWidth,
      directionalHint,
      directionalHintForRTL,
      edgeFixed,
      gapSpace,
      useDirectionalHintForRtl
    } = this.state
    return (
      <IconButton
        onRenderIcon={this.onRenderIcon}
        onRenderMenuIcon={this.onRenderMenuIcon}
        menuProps={{
          isBeakVisible: false,
          directionalHint: directionalHint,
          directionalHintForRTL: directionalHintForRTL,
          gapSpace: gapSpace,
          beakWidth: beakWidth,
          directionalHintFixed: edgeFixed,
          onItemClick: this.props.onItemClick,
          items: this.props.items
        }}
      />
    )
  }
}

export default wrapFabricContext(LogoutMenu)