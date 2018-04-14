Tabs Example:
```js
initialState = { slideIndex: 0 }
var tabsConfig = require('./sampleTabConfig.js').default;
<Tabs
  tabsConfig={tabsConfig}
  onTabActive={(activeTab, tabConfig, index) => setState({ slideIndex: index })}
  slideIndex={state.slideIndex}
/>
```