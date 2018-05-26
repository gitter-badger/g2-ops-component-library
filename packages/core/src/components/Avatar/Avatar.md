Avatar Example:

Useful for actions that can be used as overlays on top of images or documents.

```js
const iconsList = [
  'file_upload', 'file_download', 'edit', 'delete', 'remove', 'add'
];

<div>
  {iconsList.map((iconName) => (
    <span style={{ marginLeft: '5px' }}>
    <Avatar
      color={'black'}
      backgroundColor={'#ccc'}
			size={30}
			key={iconName}
      icon={<i className="material-icons">{iconName}</i>}
    />
  </span>
  ))}
</div>
```