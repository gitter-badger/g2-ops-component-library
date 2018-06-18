import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import fileSize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import image from 'rollup-plugin-img'
import cssModules from 'postcss-modules'
import json from 'rollup-plugin-json'
import clear from 'rollup-plugin-clear'
import uglify from 'rollup-plugin-uglify-es'
import analyzer from 'rollup-plugin-visualizer'
import externals from 'rollup-plugin-peer-deps-external'

const uniqueCssClass = (filePath) => {
  return filePath
  .split('/src/')[1]
  .replace('/', '_')
  .replace(/\.(pcss|scss|css)$/, '--')
}

const generateScopedName = (name, file, css) => {
  return file.endsWith('.pcss')
    ? `${uniqueCssClass(file)}${name}`
    : name
}

const plugins = [
  clear({
    targets: ['./dist']
  }),
  
  externals(),

  resolve({
    preferBuiltins: true,
    browser: true,
  }),

  postcss({
    extensions: ['.css', '.scss', '.pcss'],
    modules: false,
    extract: false,
    inject: true,
    plugins: [
      autoprefixer({
        cascade: false,
        remove: true
      }),
      cssModules({
        context: '.${PWD}/src',
        getJSON() {},
        generateScopedName
      }),
    ],
  }),

  json({
    exclude: ['node_modules/libphonenumber-js/metadata.min.json'],
    preferConst: true,
    indent: '  '
  }),

  babel({
    exclude: 'node_modules/**',
  }),

  commonjs({

  }),
  image(),
  fileSize(),
  progress(),
  // analyzer()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify())
}

export default plugins