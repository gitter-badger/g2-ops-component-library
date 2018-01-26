# Ops Portal UI Component Library

#### Collection of generic UI components built in React using Material-ui and Fabric.

### Style Guide

We are building this with a living style guide to showcase how to use the various components, using React Styleguidist.

The styleguide will be available at [https://g2-ops-styleguide.copart.com/](https://g2-ops-styleguide.copart.com/)

While developing, it is useful to serve the styleguide using `yarn styleguide`, which will hot reload changes as you develop.

### Prerequisites

Basic knowledge of React.
Using Material/Fabric components.
Please refer to React-Styleguidist cookbook for documenting components.

### Installing

```
git clone https://github.com/copartit/ops-portal-component-library.git
cd ops-portal-component-library
yarn install or npm install
```

## Development

### Scripts

- `yarn install` to install dependencies
- `yarn styleguide` to generate and serve style guide
- `yarn test` to run tests
- `yarn run build` to build for production
- `yarn run styleguide:build` to build a static version of the styleguide for deployment

### Tests

We are aiming to build from the ground up with tests where appropriate, using Mocha, Chai and Enzyme.

To execute the tests, simply run `yarn test`.

## Contributing

Contributions are welcome. Please create Pull Requests for enhancements, bug fixes.
