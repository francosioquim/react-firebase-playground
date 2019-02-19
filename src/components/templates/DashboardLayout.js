import AppHeader from 'components/organisms/AppHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router'
import SidebarMenu from 'components/organisms/SidebarMenu'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
})

class DashboardLayout extends React.Component {
    state = {
        open: false,
    }

    handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, component: Component } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppHeader onOpen={this.handleDrawerOpen} open={this.state.open} />
                <SidebarMenu onClose={this.handleDrawerClose} open={this.state.open} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Route
                        render={(matchProps) => {
                            return <Component {...matchProps} />
                        }}
                    />
                </main>
            </div>
        )
    }
}

DashboardLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    component: PropTypes.func,
}

export default withStyles(styles)(DashboardLayout)
