import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        maxWidth: 1280,
        minHeight: '100vh',
        margin: '0 auto',
    },
    content: {},
    wrapper: {
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        width: '100%',
        maxWidth: 440,
    },
})

const FullScreenLayout = ({ classes, component: Component, className: classNameProp }) => {
    const className = classNames(classes.root, classNameProp)
    return (
        <Route
            render={(matchProps) => (
                <Grid container className={className} justify="center" alignItems="center">
                    <Grid className={classes.wrapper}>
                        <Component {...matchProps} />
                    </Grid>
                </Grid>
            )}
        />
    )
}

FullScreenLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    component: PropTypes.func,
    className: PropTypes.string,
}

FullScreenLayout.FullScreenLayoutProps = {}

export default withStyles(styles)(FullScreenLayout)
