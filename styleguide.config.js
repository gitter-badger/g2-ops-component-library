module.exports = {
  template: './docs-styleguidist/template.html',
  assetsDir: './docs-styleguidist',
  sections: [
    {
      name: 'Demo',
      content: 'g2-layout-demo/src/demo/demo.md',
    },
    {
      name: 'UI Components',
      components: 'src/components/*/[A-Z]*.js',
    },
  ],
}
