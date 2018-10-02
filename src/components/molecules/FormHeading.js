import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'cake-ui-v1/Typography'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = () => ({
    root: {},
})

function FormHeading(props) {
    const { classes, className: classNameProp, heading, subHeading } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            {heading ? (
                <Typography variant="display2" gutterBottom headlineMapping={{ headline: 'h2' }}>
                    {heading}
                </Typography>
            ) : null}
            {subHeading ? (
                <Typography variant="body1" gutterBottom>
                    {subHeading}
                </Typography>
            ) : null}
        </div>
    )
}

FormHeading.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

FormHeading.defaultProps = {}

export default withStyles(styles)(FormHeading)
