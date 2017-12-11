import * as React from 'react'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

export class ContextualMenu extends React.Component {
  state = {
    directionalHint: DirectionalHint.bottomCenter,
    directionalHintForRTL: DirectionalHint.bottomCenter,
    useDirectionalHintForRtl: false,
    gapSpace: 0,
    beakWidth: 20,
    edgeFixed: false
  }
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
      <Fabric>
        <IconButton
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
                name: 'Sidharth Mehra'
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
        >
          <i className="material-icons">account_circle</i>
        </IconButton>
      </Fabric>
    )
  }
}

export default ContextualMenu