Icon Button Example:
Render any icon from material icons that can be found here: https://material.io/icons/
```js
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
    <IconButton>
      <i className="material-icons">{iconName}</i>
    </IconButton>
  ))}
</div>
```