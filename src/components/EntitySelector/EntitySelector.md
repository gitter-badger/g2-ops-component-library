Entity Selector Example:

```js
var refData = require('./refData').default;
const locationOptions = refData.ids;
const locationDescriptions = refData.entities;

initialState = { value: '' };

<div style={{ maxWidth: '500px' }}>
  <EntitySelector
    name="Location"
    options={locationOptions}
    value={state.value}
    label="Location"
    labelPositon="left"
    required
    onChange={(value) => setState({ value })}
    typeOfSelector="pickupLocation"
    iconProps={{
      iconName: 'add_box',
      actionToolTip: 'Add New Location',
      onTouchTap: () => console.log('Add New Location clicked')
    }}
    onRenderEntityInformation={() => 'Entity Information Rendered here...'}
  />
</div>
```