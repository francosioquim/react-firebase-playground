import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

import Landing from './views/Landing'
import CssBaseline from 'cake-ui-v1/CssBaseline'
import Something from './views/Something'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/something" component={Something} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
