import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'cake-ui-v1/Typography'
import classNames from 'classnames'
import logo from 'assets/images/logo.svg'
import { withStyles } from 'cake-ui-v1/styles'

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
    const { classes, className: classNameProp, ...other } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            <img src={logo} {...other} alt="Crab Cake" className={classes.logo} />
            <Typography className={classes.title} variant="title" headlineMapping={{ title: 'span' }}>
                Crab Cake
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
