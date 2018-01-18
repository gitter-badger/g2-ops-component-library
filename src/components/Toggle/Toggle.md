Toggle Example

```js
const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
};

<div style={styles.block}>
  <Toggle
    label="Simple"
    style={styles.toggle}
  />
  <Toggle
    label="Toggled by default"
    defaultToggled={true}
    style={styles.toggle}
  />
  <Toggle
    label="Disabled"
    disabled={true}
    style={styles.toggle}
  />
  <Toggle
    label="Label on the right"
    labelPosition="right"
    style={styles.toggle}
  />
</div>
```