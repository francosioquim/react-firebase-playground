import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        padding: theme.spacing.md,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        marginRight: theme.spacing.md,
    },
    title: {
        fontWeight: 'bold',
        fontSize: theme.typography.pxToRem(30),
    },
})

function Logo(props) {
    const { classes, className: classNameProp } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            <Typography className={classes.title} variant="h6">
                Parent Trader
            </Typography>
        </div>
    )
}

Logo.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

Logo.defaultProps = {}

export default withStyles(styles)(Logo)
