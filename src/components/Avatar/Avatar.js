import React from 'react'
import PropTypes from 'prop-types'
import MuiAvatar from 'material-ui/Avatar'
import { wrapMuiContext } from '../../wrapMuiContext'

const Avatar = ({ backgroundColor, className, color, size, icon, src, style, children }) => (
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

Avatar.propTypes = {
  /** The backgroundColor of the avatar. Does not apply to image avatars. */
  backgroundColor: PropTypes.string,
  /** Can be used, for instance, to render a letter inside the avatar. */
  children: PropTypes.node,
  /** The css class name of the root div or img element. */
  className: PropTypes.string,
  /** The icon or letter's color. */
  color: PropTypes.string,
  /** This is the SvgIcon or FontIcon to be used inside the avatar. */
  icon: PropTypes.element,
  /** This is the size of the avatar in pixels. */
  size: PropTypes.number,
  /** If passed in, this component will render an img element. Otherwise, a div will be rendered. */
  src: PropTypes.string,
  /** Override the inline styles of the root element */
  style: PropTypes.objectOf(PropTypes.any)
}

export default wrapMuiContext(Avatar)
