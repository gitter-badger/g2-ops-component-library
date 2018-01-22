Entity Selector Example:

```js
const pickupLocations = require('./refData').default;
const { IconButton } = require('../Button');
const locationOptions = pickupLocations.ids;
const locationDescriptions = pickupLocations.entities;

initialState = { value: '', disabled: false };

<div style={{ maxWidth: '500px', height: '250px' }}>
  <EntitySelector
    name="Location"
    options={locationOptions}
    value={state.value}
    label="Location"
    labelPosition="left"
    required
    disabled={state.disabled}
    onChange={(value) => setState({ value })}
    typeOfSelector="pickupLocation"
    pickupLocations={pickupLocations}
    onRenderEntityAction={() => !state.disabled ? (
      <IconButton 
        style={{  marginTop: '-8px' }}
        tooltip={'Add New Location'}
        onTouchTap={() => console.log('Add New Location clicked')}
      >
        <i className="material-icons md-dark md-22">add_box</i>
      </IconButton>
    ) : {}}
    onRenderSuffix={() => !state.disabled ? (
      <IconButton
        style={{ margin: '-15px' }}
        onTouchTap={() => console.log('edit clicked')}
        tooltip={'Edit Location'}
      >
        <i className="material-icons md-dark md-18">edit_mode</i>
      </IconButton>
    ) : {}}
  />
</div>
```