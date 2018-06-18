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

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

import plugins from './plugins'

export default [{
  experimentalCodeSplitting: true,

  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'es',
    sourcemap: true
  },

  external: ['ramda'],
  plugins
}]