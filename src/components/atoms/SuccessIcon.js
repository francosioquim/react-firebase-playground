import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import successIconImage from 'assets/images/successIcon.svg'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        padding: theme.spacing.md,
    },
})

function SuccessIcon(props) {
    const { classes, className: classNameProp, ...other } = props

    const className = classNames(classes.root, classNameProp)

    return <img src={successIconImage} className={className} {...other} alt="Roam Operations SuccessIcon" />
}

SuccessIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

SuccessIcon.defaultProps = {}

export default withStyles(styles)(SuccessIcon)
