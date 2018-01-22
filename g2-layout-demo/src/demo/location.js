import React from 'react'
import { EntitySelector, DialogBox, IconButton, Button } from 'ops-portal-component-library'
import renderIf from 'render-if'
import pickupLocations from './refData'

const locationOptions = pickupLocations.ids;

const LocationInfoForm = (props) => (
  <div>
    Main Dialog Content to be added here
  </div>
)

class LocationComponent extends React.Component {
  state = {
    hideDialog: true,
    dialogType: 'add',
    Location: 772,
  }
  render() {
    const renderActionsBasedOnDisable = renderIf(this.props.disabled === false)
    return (
      <div style={{ backgroundColor: '#f4f4f4', height: '200px', padding: '10px', margin: '5px 0 0 5px' }}>
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
              style={{ margin: '-15px' }}
              tooltip={'Add New Location'}
              onTouchTap={() => this.setState({ hideDialog: false, dialogType: 'add' })}
            >
              <i className="material-icons md-dark md-22">add_box</i>
            </IconButton>
          )}
          onRenderSuffix={() => renderActionsBasedOnDisable(
            <IconButton
              style={{ margin: '-15px' }}
              onTouchTap={() => this.setState({ hideDialog: false, dialogType: 'edit' })}
              tooltip={'Edit Location'}
            >
              <i className="material-icons md-dark md-18">edit_mode</i>
            </IconButton>
          )}
        />
        <DialogBox
          title={'Dialog with Content'}
          hideDialog={this.state.hideDialog}
          onDismiss={() => this.setState({ hideDialog: true })}
          onRenderFooter={() => (
            <div style={{ display: 'flex', float: 'right' }}>
              <Button
                type={'primary'}
                icon={<i style={{ marginTop: '-10px' }} className="material-icons md-light md-22">save</i>}
                onClick={() => this.setState({ hideDialog: true })}
                label={'Save'}
              />
              <span style={{ width: '10px' }}>{}</span>
            </div>
          )}>
          <LocationInfoForm />
        </DialogBox>
      </div>
    )
  }
}

export default LocationComponent