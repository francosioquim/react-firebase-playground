import ArrowDropDown from 'cake-ui-v1-icons/ArrowDropDown'
import Grid from 'cake-ui-v1/Grid'
import HeaderNavigation from 'components/molecules/HeaderNavigation'
import Logo from 'components/atoms/Logo'
import Menu from 'cake-ui-v1/Menu'
import MenuItem from 'cake-ui-v1/MenuItem'
import PropTypes from 'prop-types'
import React from 'react'
import UserAvatar from 'components/molecules/UserAvatar'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = (theme) => {
    return {
        root: {},
        navigation: {
            marginTop: theme.spacing.md,
        },
        userAvatar: {
            justifyContent: 'center',
        },
        logo: {
            fontSize: theme.typography.pxToRem(24),
        },
    }
}

class Header extends React.Component {
    state = {
        anchorEl: null,
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    handleLogout = () => {
        if (this.props.onLogout) {
            this.props.onLogout()
        }
        this.setState({ anchorEl: null })
    }

    render() {
        const { anchorEl } = this.state
        const { classes, className: classNameProp, onChange, pathname, tabItems } = this.props

        const className = classNames(classes.root, classNameProp)
        return (
            <div className={className}>
                <Grid alignItems="center" direction="row" justify="space-between" container>
                    <Grid item>
                        <Logo />
                    </Grid>
                    <Grid item>
                        <div>
                            <UserAvatar user="Admin" className={classes.userAvatar} onClick={this.handleClick}>
                                <ArrowDropDown />
                            </UserAvatar>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Grid>
                </Grid>
                <HeaderNavigation
                    className={classes.navigation}
                    pathname={pathname}
                    onChange={onChange}
                    tabItems={tabItems}
                />
            </div>
        )
    }
}

Header.propTypes = {
    actions: PropTypes.object,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    pathname: PropTypes.string,
    tabItems: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {}

export default withStyles(styles)(Header)
