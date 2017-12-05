import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App.js'

injectTapEventPlugin();

ReactDOM.render(App, document.getElementById('app'))
