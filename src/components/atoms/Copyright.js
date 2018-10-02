import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'cake-ui-v1/Typography'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = (theme) => ({
    root: {
        padding: theme.spacing.md,
    },
})

function Copyright(props) {
    const { classes, className: classNameProp, ...other } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <Typography className={className} color="textSecondary" align="center" {...other}>
            © 2018 Roam Creative Ltd. All Rights Reserved
        </Typography>
    )
}

Copyright.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

Copyright.defaultProps = {}

export default withStyles(styles)(Copyright)
