Entity Selector Example 1:

```js
const { pickupLocations1 } = require('./refData');
const { IconButton } = require('../Button');
const PickupPrimaryText = require('./PickupPrimaryText').default;
const EntityInformation = require('./EntityInformation').default;
const locationOptions = pickupLocations1.ids;
const locationDescriptions = pickupLocations1.entities;

initialState = { value: '' };

<div style={{ maxWidth: '500px', height: '220px' }}>
  <EntitySelector
    name="Location"
    dataSource={pickupLocations1}
    value={state.value}
    label="Location"
    labelPosition="left"
    searchKeys={['lot_site_nm']}
    displaySelectedOption={(e) => e.lot_site_nm}
    menuItemBuilder={(e) => e && <PickupPrimaryText {...e} />}
    onChange={(value) => {
      const newVal = typeof value === 'object' ? value.code : value
      setState({ value: newVal })}
      }
  />
</div>
```

Entity Selector Example 2:
```js
const { pickupLocations2 } = require('./refData');
const { IconButton } = require('../Button');
const PickupPrimaryText = require('./PickupPrimaryText').default;
const EntityInformation = require('./EntityInformation').default;
const locationOptions = pickupLocations2.ids;
const locationDescriptions = pickupLocations2.entities;

initialState = { value: '', disabled: false };

<div style={{ maxWidth: '500px', height: '220px' }}>
  <EntitySelector
    name="Location"
    dataSource={pickupLocations2}
    value={state.value}
    label="Location"
    labelPosition="left"
    required
    disabled={state.disabled}
    displaySelectedOption={(e) => e.lot_site_nm}
    searchKeys={['lot_site_nm', 'phone_num', 'email']}
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