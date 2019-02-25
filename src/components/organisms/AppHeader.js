import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: theme.background,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
})

class AppHeader extends React.PureComponent {
    render() {
        const { classes, onOpen, open } = this.props

        return (
            <AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)}>
                <Toolbar disableGutters={!open} className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={onOpen}
                        className={classNames(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" color="inherit" noWrap className={classes.title}>
                        AppHeader
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
}

AppHeader.defaultProps = {}

export default withStyles(styles)(AppHeader)
