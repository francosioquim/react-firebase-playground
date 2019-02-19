import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHeading from 'components/molecules/FormHeading'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {},
    formControl: {
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.unit,
    },
})

function FormResult(props) {
    const { buttonLabel, classes, className: classNameProp, heading, onClick, subHeading } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            <FormHeading heading={heading} subHeading={subHeading} />
            <FormControl className={classes.formControl} fullWidth>
                <Button autoFocus onClick={onClick} type="button" variant="raised" size="large" color="primary">
                    {buttonLabel || 'Return to login'}
                </Button>
            </FormControl>
        </div>
    )
}

FormResult.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

FormResult.defaultProps = {}

export default withStyles(styles)(FormResult)
