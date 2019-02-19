import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FaceIcon from '@material-ui/icons/Face'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import IconButton from '@material-ui/core/IconButton'
import LayersIcon from '@material-ui/icons/Layers'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MessageIcon from '@material-ui/icons/Message'
import PeopleIcon from '@material-ui/icons/People'
import PropTypes from 'prop-types'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: theme.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: 0,
        [theme.breakpoints.up('sm')]: {
            width: 0,
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
})

function SidebarMenu(props) {
    const { classes, onClose, open, goToGroups, goToHome } = props

    return (
        <Drawer
            variant="body1"
            classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={onClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <div>
                    <ListItem button onClick={goToHome}>
                        <ListItemIcon>
                            <GroupWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Group" />
                    </ListItem>
                    <ListItem button onClick={goToGroups}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <MessageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Items" />
                    </ListItem>
                </div>
            </List>
            <Divider />
            <List>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <FaceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </div>
            </List>
        </Drawer>
    )
}

SidebarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    goToHome: PropTypes.func,
    goToGroups: PropTypes.func,
}

SidebarMenu.defaultProps = {}

export default withStyles(styles)(SidebarMenu)
