# Ops Portal UI Component Library

[![Join the chat at https://gitter.im/copartit/g2-ops-component-library](https://badges.gitter.im/copartit/g2-ops-component-library.svg)](https://gitter.im/copartit/g2-ops-component-library?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<p>
<a href="https://www.npmjs.com/package/@copart/core-components"><img src="https://img.shields.io/badge/%40copart%2Fcore--components-0.2.3-brightgreen.svg" alt="NPM Version"></a>
</p>

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

```sh
$ git clone https://github.com/copartit/g2-ops-component-library.git
$ cd g2-ops-component-library
$ yarn
```

## Development

### Scripts

- `yarn` to install dependencies
- `yarn start` to run the style guide
- `yarn test` to run tests
- `yarn styleguide:build` to build a static version of the styleguide for deployment

### Tests

Test coverage for Components using Jest.

To execute the tests, simply run `yarn test`.

## Deploments

To deploy follow the instructions on [Deploy.md](https://github.com/copartit/g2-ops-component-library/blob/master/Deploy.md)

## Contributing

Contributions are welcome. Please create Pull Requests for enhancements, bug fixes.

## Todo

- Remove `stage-2` and below Babel plugins/presets.
- Create `localhost.copart.com/styleguide` proxy.
- Set up `maid` scripts.
