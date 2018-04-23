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

```sh
$ git clone https://github.com/copartit/g2-ops-component-library.git
$ cd g2-ops-component-library
$ yarn
```

## Development

### Scripts

* `yarn` to install dependencies
* `yarn styleguide` to generate and serve style guide
* `yarn test` to run tests
* `yarn build` to build for production
* `yarn styleguide:build` to build a static version of the styleguide for deployment

### Tests

We are aiming to build from the ground up with tests where appropriate, using Mocha, Chai and Enzyme.

To execute the tests, simply run `yarn test`.

## Deploments

To deploy follow the instructions on [Deploy.md](https://github.com/copartit/g2-ops-component-library/blob/master/Deploy.md)

## Contributing

Contributions are welcome. Please create Pull Requests for enhancements, bug fixes.
