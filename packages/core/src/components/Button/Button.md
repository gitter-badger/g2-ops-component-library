Button Component Examples:
```jsx
<div>
  <span style={{ margin: '10px' }}><Button variant="primary" label="Primary Button" onClick={() => console.log('Clicked')}/></span>
  <span style={{ margin: '10px' }}><Button variant="secondary" label="Secondary Button" onClick={() => console.log('Clicked')}/></span>
  <span style={{ margin: '10px' }}><Button variant="inactive" disabled label="Inactive" onClick={() => console.log('Clicked')}/></span>
  <span style={{ margin: '10px' }}><Button variant="add" onClick={() => console.log('Clicked')}/></span>
  <span style={{ margin: '10px' }}><Button variant="edit" onClick={() => console.log('Clicked')}/></span>
  <span style={{ margin: '10px' }}><Button variant="delete" onClick={() => console.log('Clicked')}/></span>
</div>
```

Icon Button Examples:

Render any icon from material icons that can be found here: https://material.io/icons/
```js
const { IconButton } = require('./Button');
const iconsList = [
  'save', 'delete_forever', 'close',
  'assignment', 'autorenew', 'cached',
  'call', 'cancel', 'create', 'exit_to_app',
  'favorite', 'filter_list', 'forward',
  'help', 'lock_outline', 'offline_pin',
  'open_in_new', 'phone', 'print', 'receipt',
  'replay', 'search', 'settings_backup_restore',
  'settings', 'sort', 'swap_horiz', 'add_circle',
  'remove_circle'
];
<div>
  {iconsList.map(iconName => (
    <IconButton
      key={iconName}
      tooltip={iconName}
      onClick={() => console.log(`${iconName} clicked.`)}>
      <i className="material-icons">{iconName}</i>
    </IconButton>
  ))}
</div>
```