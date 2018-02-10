module.exports = {
  template: './docs-styleguidist/template.html',
  assetsDir: './docs-styleguidist',
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/**/[A-Z]*.js',
    },
    {
      name: 'Demo',
      components: 'g2-layout-demo/src/demo/demo.js',
    },
  ],
}
