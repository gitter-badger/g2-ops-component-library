const resolve = require('resolve')
const path = require('path')

const log = require('debug')('eslint-plugin-import:resolver:node')

module.exports.interfaceVersion = 2

/*eslint-disable*/

module.exports.resolve = (source, file, config) => {
  log('Resolving:', source, 'from:', file)
  let resolvedPath

  if (resolve.isCore(source)) {
    log('resolved to core')
    return { found: true, path: null }
  }

  source = applyModuleNameMapper(source, config)

  try {
    resolvedPath = resolve.sync(source, opts(file, config))
    log('Resolved to:', resolvedPath)
    return { found: true, path: resolvedPath }
  } catch (err) {
    log('resolve threw error:', err)
    return { found: false }
  }
}

function opts(file, config) {
  return Object.assign(
    {
      // more closely matches Node (#333)
      extensions: ['.js', '.json'],
    },
    config,
    {
      // path.resolve will handle paths relative to CWD
      basedir: path.dirname(path.resolve(file)),
      packageFilter,
    }
  )
}

function packageFilter(pkg) {
  if (pkg['jsnext:main']) {
    pkg.main = pkg['jsnext:main']
  }
  return pkg
}

function applyModuleNameMapper(source, config) {
  Object.keys(config.moduleNameMapper).forEach((regex) => {
    const mappedModuleName = config.moduleNameMapper[regex]

    if (source.match(regex)) {
      const matches = source.match(regex)
      if (!matches) {
        source = mappedModuleName
      } else {
        source = mappedModuleName.replace(/\$([0-9]+)/g, (_, index) => matches[parseInt(index, 10)])
      }
      source = path.resolve(source)
    }
  })

  return source
}
/* eslint-enable */
