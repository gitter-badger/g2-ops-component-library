Chip Example:

Useful for implementing Search chips and Filter chips that are currently used in Ops-portal.

```js
var chipData = [
  {key: 0, label: 'ReactJs'},
  {key: 1, label: 'JavaScript'},
  {key: 2, label: 'Material UI'},
  {key: 3, label: 'Fabric'},
];

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
  {chipData.map((data) => (
    <Chip
      key={data.key}
      onRequestDelete={() => console.log('deletes the chip')}
      style={{ marginLeft: 4 }}
		>
      {data.label}
    </Chip>
  ))}
</div>
```