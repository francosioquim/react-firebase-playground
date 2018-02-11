import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Reboot from 'material-ui/Reboot'

import Landing from './views/Landing'
import Something from './views/Something'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot />
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
