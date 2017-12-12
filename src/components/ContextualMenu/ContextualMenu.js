import * as React from 'react'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { wrapFabricContext } from '../../wrapFabricContext'
import './style.scss'

export class ContextualMenu extends React.Component {
  state = {
    directionalHint: DirectionalHint.bottomCenter,
    directionalHintForRTL: DirectionalHint.bottomCenter,
    useDirectionalHintForRtl: false,
    gapSpace: 0,
    beakWidth: 20,
    edgeFixed: false
  }
  onRenderIcon = () => <i className="material-icons">account_circle</i>
  render() {
    let {
      beakWidth,
      directionalHint,
      directionalHintForRTL,
      edgeFixed,
      gapSpace,
      useDirectionalHintForRtl
    } = this.state
    return (
      <IconButton
        onRenderIcon={this.props.onRenderIcon || this.onRenderIcon}
        styles={{
          menuIcon: {
            display: 'none'
          }
        }}
        menuProps={{
          isBeakVisible: false,
          directionalHint: directionalHint,
          directionalHintForRTL: directionalHintForRTL,
          gapSpace: gapSpace,
          beakWidth: beakWidth,
          directionalHintFixed: edgeFixed,
          onItemClick: (event, item) => console.log(item),
          items: [
            {
              key: 'userName',
              name: this.props.userName,
            },
            {
              key: 'settings',
              name: 'Settings'
            },
            {
              key: 'logout',
              name: 'Logout'
            },
          ]
        }}
      />
    )
  }
}

export default wrapFabricContext(ContextualMenu)