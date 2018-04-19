// @flow

import React, { Component } from 'react'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'

// QUESTION: Is this necessary? The CSS is already imported and globally available.
import '../AppBar.scss'

type LogOutMenuPropTypes = {
  items?: Array<{
    key: string,
    name: string,
  }>,
  onItemClick?: (SyntheticMouseEvent<HTMLElement>, { key: string, name: string }) => void,
}

type LogOutMenuState = {
  directionalHint: DirectionalHint,
  directionalHintForRTL: DirectionalHint,
  useDirectionalHintForRtl: boolean,
  gapSpace: number,
  beakWidth: number,
  edgeFixed: boolean,
}

export class LogOutMenu extends Component<LogOutMenuPropTypes, LogOutMenuState> {
  state = {
    directionalHint: DirectionalHint.bottomCenter,
    directionalHintForRTL: DirectionalHint.bottomCenter,
    useDirectionalHintForRtl: false,
    gapSpace: 0,
    beakWidth: 20,
    edgeFixed: false,
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
      useDirectionalHintForRtl,
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
          items: this.props.items,
        }}
      />
    )
  }
}
