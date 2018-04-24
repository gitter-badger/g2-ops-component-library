import React from 'react'
import MuiToggle from 'material-ui/Toggle'
import { wrapMuiContext } from 'utilities/wrapMuiContext'

// QUESTION: We are just exporting the same component we imported.
// is it absolutely necessary to re-define MUI's prop types?

// type TogglePropTypes = {
//   /** Determines whether the Toggle is initially turned on. */
//   defaultToggled?: boolean,
//   /** Will disable the toggle if true. */
//   disabled?: boolean,
//   /** Overrides the inline-styles of the Toggle element. */
//   elementStyle?: { [string]: mixed },
//   /** Overrides the inline-styles of the Icon element. */
//   iconStyle?: { [string]: mixed },
//   /** Overrides the inline-styles of the input element. */
//   inputStyle?: { [string]: mixed },
//   /** Label for toggle. */
//   label: string,
//   /** Where the label will be placed next to the toggle. */
//   labelPosition?: 'left' | 'right',
//   /** Overrides the inline-styles of the Toggle element label. */
//   labelStyle?: { [string]: mixed },
//   /** Callback function that is fired when the toggle switch is toggled. */
//   onToggle?: (SyntheticMouseEvent<HTMLInputElement>, boolean) => void,
//   /** Override style of ripple. */
//   rippleStyle?: { [string]: mixed },
//   /** Override the inline-styles of the root element. */
//   style?: { [string]: mixed },
//   /** Override style for thumb. */
//   thumbStyle?: { [string]: mixed },
//   /** Toggled if set to true. */
//   toggled?: boolean,
//   /** Override style for track. */
//   trackStyle?: { [string]: mixed },
//   /** ValueLink prop for when using controlled toggle. */
//   valueLink?: Object,
// }

export const Toggle = wrapMuiContext(MuiToggle)
