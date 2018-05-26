import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './styles/common.css'
import './styles/simplegrid.css'
import './styles/virtualized.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
