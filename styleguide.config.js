module.exports = {
  template: './docs-styleguidist/template.html',
  skipComponentsWithoutExample: true,
  title: 'G2 Ops UI Styleguide',
  showCode: false,
  assetsDir: './docs-styleguidist',
  sections: [
    {
      name: 'Components',
      components: 'packages/core/src/components/**/[A-Z]*.js',
    },
    {
      name: 'Demo Page',
      content: 'Demo.md',
    },
  ],
}
