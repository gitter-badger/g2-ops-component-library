import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Demo from './demo/demo'

const App = () => (
  <Router>
    <Route exact path="/" component={Demo} />
  </Router>
)

export default App
