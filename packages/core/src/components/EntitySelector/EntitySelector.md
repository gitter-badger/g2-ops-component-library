Entity Selector Example:

```js
const pickupLocations = require('./refData').default;
const { IconButton } = require('../Button');
const PickupPrimaryText = require('./PickupPrimaryText').default;
const EntityInformation = require('./EntityInformation').default;
const locationOptions = pickupLocations.ids;
const locationDescriptions = pickupLocations.entities;

initialState = { value: '', disabled: false };

<div style={{ maxWidth: '500px', height: '250px' }}>
  <EntitySelector
    name="Location"
    dataSource={pickupLocations}
    value={state.value}
    label="Location"
    labelPosition="left"
    required
    disabled={state.disabled}
    displaySelectedOption={(e) => e.lot_site_nm}
    menuItemBuilder={(e) => e && <PickupPrimaryText {...e} />}
    entityInformation={<EntityInformation valueEntity={locationDescriptions[state.value] || {}} />}
    onChange={(value) => {
      const newVal = typeof value === 'object' ? value.code : value
      setState({ value: newVal })}
      }
    onRenderEntityAction={() => !state.disabled ? (
      <IconButton 
        style={{  marginTop: '-8px' }}
        tooltip={'Add New Location'}
        onClick={() => console.log('Add New Location clicked')}
      >
        <i className="material-icons md-dark md-22">add_box</i>
      </IconButton>
    ) : {}}
    onRenderSuffix={() => !state.disabled ? (
      <IconButton
        style={{ margin: '-15px' }}
        onClick={() => console.log('edit clicked')}
        tooltip={'Edit Location'}
      >
        <i className="material-icons md-dark md-18">edit_mode</i>
      </IconButton>
    ) : {}}
  />
</div>
```