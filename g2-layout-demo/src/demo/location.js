import React from 'react'
import { EntitySelector, DialogBox, IconButton, Button } from '@copart/core-components'

import pickupLocations from './refData'
import LocationInfoForm from './locationDialogContainer'
import PickupPrimaryText from './PickupPrimaryText'
import EntityInformation from './EntityInformation'
import './style.scss'

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
    const shouldRenderActions = disabled === false
    const actionsProps = shouldRenderActions
      ? {
          onRenderEntityAction: () => (
            <IconButton
              style={{ margin: '-8px' }}
              tooltip={'Add New Location'}
              onClick={() => this.setState({ hideDialog: false, dialogType: 'Add' })}
            >
              <i className="material-icons md-dark md-22">add_box</i>
            </IconButton>
          ),
          onRenderSuffix: () => (
            <IconButton
              style={{ margin: '-15px' }}
              onClick={() => this.setState({ hideDialog: false, dialogType: 'Edit' })}
              tooltip={'Edit Location'}
            >
              <i className="material-icons md-dark md-18">edit_mode</i>
            </IconButton>
          ),
        }
      : {}
    return (
      <div style={{ backgroundColor: '#f4f4f4', height: '200px', padding: '10px', margin: '5px 0 0 5px' }}>
        <EntitySelector
          name="Location"
          {...actionsProps}
          dataSource={pickupLocations}
          value={location}
          label="Location"
          labelPosition="left"
          searchKeys={['lot_site_nm', 'phone_num', 'email']}
          displaySelectedOption={option => option.lot_site_nm}
          menuItemBuilder={option => <PickupPrimaryText {...option} />}
          required
          disabled={disabled}
          onChange={value => {
            const newValue = typeof value === 'object' ? value.code : value
            this.setState({ location: newValue })
          }}
        />
        <EntityInformation value={pickupLocations.entities[location]} />
        <DialogBox
          showHeader
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
