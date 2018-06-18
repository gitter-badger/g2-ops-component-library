import React from 'react'
import { EntitySelector, DialogBox, IconButton, Button } from 'ops-portal-component-library'
import renderIf from 'render-if'
import pickupLocations from './refData'
import LocationInfoForm from './locationDialogContainer'
import './style.scss'

const locationOptions = pickupLocations.ids

class LocationComponent extends React.Component {
  state = {
    hideDialog: true,
    dialogType: 'Add',
    location: 772,
    showErrors: false,
  }
  render() {
    const { location, dialogType, showErrors, hideDialog } = this.state
    const { disabled } = this.props
    const renderActionsBasedOnDisable = renderIf(disabled === false)
    return (
      <div style={{ backgroundColor: '#f4f4f4', height: '200px', padding: '10px', margin: '5px 0 0 5px' }}>
        <EntitySelector
          name="Location"
          options={locationOptions}
          value={location}
          label="Location"
          labelPosition="left"
          required
          selectedOption={772}
          disabled={disabled}
          onChange={value => this.setState({ location: value })}
          typeOfSelector="pickupLocation"
          pickupLocations={pickupLocations}
          onRenderEntityAction={() =>
            renderActionsBasedOnDisable(
              <IconButton
                style={{ margin: '-8px' }}
                tooltip={'Add New Location'}
                onTouchTap={() => this.setState({ hideDialog: false, dialogType: 'Add' })}
              >
                <i className="material-icons md-dark md-22">add_box</i>
              </IconButton>,
            )
          }
          onRenderSuffix={() =>
            renderActionsBasedOnDisable(
              <IconButton
                style={{ margin: '-15px' }}
                onTouchTap={() => this.setState({ hideDialog: false, dialogType: 'Edit' })}
                tooltip={'Edit Location'}
              >
                <i className="material-icons md-dark md-18">edit_mode</i>
              </IconButton>,
            )
          }
        />
        <DialogBox
          title={`${dialogType} Location`}
          hideDialog={hideDialog}
          onDismiss={() => this.setState({ hideDialog: true, showErrors: false })}
          containerClassName="locationDialogContainer"
          onRenderFooter={() => (
            <div style={{ display: 'flex', float: 'right' }}>
              <Button
                variant="primary"
                icon={
                  <i style={{ marginTop: '-10px' }} className="material-icons md-light md-22">
                    save
                  </i>
                }
                onClick={() => this.setState({ showErrors: true })}
                label={'Save'}
              />
              <span style={{ width: '10px' }}>{}</span>
            </div>
          )}
        >
          <LocationInfoForm
            showErrors={showErrors}
            locationObject={location && dialogType === 'Edit' ? pickupLocations.entities[location] : undefined}
          />
        </DialogBox>
      </div>
    )
  }
}

export default LocationComponent
