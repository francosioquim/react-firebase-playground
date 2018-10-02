import CircularProgress from 'cake-ui-v1/CircularProgress'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
    },
    progress: (props) => ({
        marginTop: props.small ? 0 : theme.spacing.xl,
        marginBottom: props.small ? 0 : theme.spacing.xl,
        maxWidth: '100%',
        width: props.small ? 15 : 40,
        height: props.small ? 15 : 40,
    }),
})

function ProgressLoader(props) {
    const { classes, className: classNameProp } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            <CircularProgress className={classes.progress} />
        </div>
    )
}

ProgressLoader.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    small: PropTypes.bool,
}

ProgressLoader.defaultProps = {
    small: false,
}

export default injectSheet(styles)(ProgressLoader)
