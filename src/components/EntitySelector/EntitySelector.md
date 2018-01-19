Entity Selector Example:

```js
const refData = require('./refData').default;
const { IconButton } = require('../Button');
const locationOptions = refData.ids;
const locationDescriptions = refData.entities;

initialState = { value: '' };

<div style={{ maxWidth: '500px', height: '250px' }}>
  <EntitySelector
    name="Location"
    options={locationOptions}
    value={state.value}
    label="Location"
    labelPosition="left"
    required
    onChange={(value) => setState({ value })}
    typeOfSelector="pickupLocation"
    onRenderEntityAction={() => (
      <IconButton 
        tooltip={'Add New Location'}
        onTouchTap={() => console.log('Add New Location clicked')}
      >
        <i className="material-icons md-dark md-28">add_box</i>
      </IconButton>
    )}
    onRenderSuffix={() => (
      <IconButton
        style={{ margin: '-15px' }}
        onTouchTap={() => console.log('edit clicked')}
        tooltip={'Edit Location'}
      >
        <i className="material-icons md-dark md-18">edit_mode</i>
      </IconButton>
    )}
  />
</div>
```