// @flow

import React, { Component } from 'react'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'

import './AppBar.scss'

type LogoutMenuPropTypes = {
  items?: Array<{
    key: string,
    name: string,
  }>,
  onItemClick?: (SyntheticMouseEvent<HTMLElement>, { key: string, name: string }) => void,
}

type LogoutMenuState = {
  directionalHint: DirectionalHint,
  directionalHintForRTL: DirectionalHint,
  useDirectionalHintForRtl: boolean,
  gapSpace: number,
  beakWidth: number,
  edgeFixed: boolean,
}

export class LogoutMenu extends Component<LogoutMenuPropTypes, LogoutMenuState> {
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

export default LogoutMenu
