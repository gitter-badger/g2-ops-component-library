module.exports = {
	template: {
		favicon: 'favicon.ico',
		head: {
			links: [
				{
					rel: 'stylesheet',
					href:
						'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i',
				},
			],
		},
	},
	theme: {
		fontFamily: {
			base: '"Roboto", sans-serif',
		},
	},
	// filename: './docs-styleguidist/template.html',
	webpackConfig: require('./webpack.styleguide'),
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
