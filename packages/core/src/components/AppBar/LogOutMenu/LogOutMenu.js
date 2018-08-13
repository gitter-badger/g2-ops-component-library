// @flow

import React, { Component } from 'react'
import { IconButton } from 'office-ui-fabric-react/lib/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu'

// QUESTION: Is this necessary? The CSS is already imported and globally available.
import '../AppBar.scss'

type LogOutMenuPropsT = {
  items?: Array<{
    key: string,
    name: string,
  }>,
  onItemClick?: (SyntheticMouseEvent<HTMLElement>, { key: string, name: string }) => void,
}

const renderIcon = () => <i className="material-icons md-light">account_circle</i>
const renderMenuIcon = () => {}

export const LogOutMenu = ({ items, onItemClick }: LogOutMenuPropsT) =>(
  <IconButton
    onRenderIcon={renderIcon}
    onRenderMenuIcon={renderMenuIcon}
    menuProps={{
      isBeakVisible: false,
      directionalHint: DirectionalHint.bottomCenter,
      directionalHintForRTL: DirectionalHint.bottomCenter,
      gapSpace: 0,
      beakWidth: 20,
      directionalHintFixed: false,
      onItemClick: onItemClick,
      items: items,
    }}
  />
)

export default {}