const fs = require('fs')
const path = require('path')

const css = fs.readFileSync(path.resolve(__dirname, './dist/main.css'), 'utf8')
fs.writeFileSync(path.resolve(__dirname, './dist/main.scss'), css, 'utf8')