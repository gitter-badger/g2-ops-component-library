import React from 'react'
import { EntitySelector, DialogBox, IconButton } from 'ops-portal-component-library'
import renderIf from 'render-if'
import pickupLocations from './refData'

const locationOptions = pickupLocations.ids;

class LocationComponent extends React.Component {
  state = {
    showDialog: false,
    Location: 772,
  }
  render() {
    const renderActionsBasedOnDisable = renderIf(this.props.disabled === false)
    return (
      <EntitySelector
        name="Location"
        options={locationOptions}
        value={this.state['Location']}
        label="Location"
        labelPosition="left"
        required
        selectedOption={772}
        disabled={this.props.disabled}
        onChange={(value) => this.setState({ 'Location': value })}
        typeOfSelector="pickupLocation"
        pickupLocations={pickupLocations}
        onRenderEntityAction={() => renderActionsBasedOnDisable(
          <IconButton 
            tooltip={'Add New Location'}
            onTouchTap={() => console.log('Add New Location clicked')}
          >
            <i className="material-icons md-dark md-22">add_box</i>
          </IconButton>
        )}
        onRenderSuffix={() => renderActionsBasedOnDisable(
          <IconButton
            style={{ margin: '-15px' }}
            onTouchTap={() => console.log('edit clicked')}
            tooltip={'Edit Location'}
          >
            <i className="material-icons md-dark md-18">edit_mode</i>
          </IconButton>
        )}
      />
    )
  }
}

export default LocationComponent