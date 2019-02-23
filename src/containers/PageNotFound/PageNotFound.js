import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
    },
    wrapper: {
        marginTop: theme.spacing.xxl,
    },
    label: {
        fontSize: theme.typography.pxToRem(70),
        lineHeight: theme.typography.pxToRem(70),
    },
})

const PageNotFound = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.wrapper}>
            <Typography className={classes.label} variant="h1" component="p">
                404
            </Typography>
            <Typography variant="body2" gutterBottom>
                You
                {"'"}
                ve gone way too far
            </Typography>
        </div>
    </div>
)

PageNotFound.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    goTo: PropTypes.func,
    pathname: PropTypes.string,
}

export default withStyles(styles)(PageNotFound)
