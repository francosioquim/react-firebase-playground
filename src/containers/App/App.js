import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from 'cake-ui-v1/CssBaseline'
import DashboardLayout from 'components/templates/DashboardLayout'
import Example from 'containers/Example'
import FullScreenLayout from 'components/templates/FullScreenLayout'
import Home from 'containers/Home'
import Login from 'containers/Login'
import NewPassword from 'containers/NewPassword'
import PageNotFound from 'containers/PageNotFound'
import React from 'react'
import Reset from 'containers/Reset'
import { Switch } from 'react-router'
import { history } from 'utils/routes'

const App = () => (
    <div className="App">
        <CssBaseline />
        <ConnectedRouter history={history}>
            <Switch>
                <DashboardLayout exact path="/" component={Home} />
                <FullScreenLayout exact path="/login" component={Login} />
                <FullScreenLayout exact path="/reset" component={Reset} />
                <DashboardLayout exact path="/home" component={Home} />
                <DashboardLayout exact path="/example" component={Example} />
                <FullScreenLayout exact path="/new-password" component={NewPassword} />
                <FullScreenLayout component={PageNotFound} />
            </Switch>
        </ConnectedRouter>
    </div>
)

export default App
