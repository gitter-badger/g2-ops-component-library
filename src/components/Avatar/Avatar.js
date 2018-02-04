// @flow

import type { Node } from 'react'

import React from 'react'
import PropTypes from 'prop-types'
import MuiAvatar from 'material-ui/Avatar'

import { wrapMuiContext } from '../../wrapMuiContext'

type AvatarPropTypes = {
  /** The backgroundColor of the avatar. Does not apply to image avatars. */
  backgroundColor?: string,
  /** Can be used, for instance, to render a letter inside the avatar. */
  children?: Node,
  /** The css class name of the root div or img element. */
  className?: string,
  /** The icon or letter's color. */
  color?: string,
  /** This is the SvgIcon or FontIcon to be used inside the avatar. */
  icon: Node,
  /** This is the size of the avatar in pixels. */
  size?: number,
  /** If passed in, this component will render an img element. Otherwise, a div will be rendered. */
  src?: string,
  /** Override the inline styles of the root element */
  style?: {
    [string]: string,
  },
}

const Avatar = ({ backgroundColor, className, color, size, icon, src, style, children }: AvatarPropTypes) => (
  <MuiAvatar
    backgroundColor={backgroundColor}
    className={className}
    color={color}
    icon={icon}
    size={size}
    src={src}
    style={style}
  >
    {children}
  </MuiAvatar>
)

export default wrapMuiContext(Avatar)
