import React, {Component} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import Landing from './views/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Landing} />
            <Route path="/landing" component={Landing} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
