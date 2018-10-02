import Button from 'cake-ui-v1/Button'
import { FORM_ACTION_ERROR_STATUS } from 'constants/form'
import FormControl from 'cake-ui-v1/FormControl'
import FormHelperText from 'cake-ui-v1/FormHelperText'
import PropTypes from 'prop-types'
import React from 'react'
import RouterLink from 'cake-ui-v1/RouterLink'
import TextField from 'cake-ui-v1/TextField'
import Typography from 'cake-ui-v1/Typography'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
        padding: `0 ${theme.spacing.unit}px`,
    },
    errorMessage: {
        padding: `${theme.spacing.md}px 0`,
    },
    formControl: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    formControlButton: {
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.unit,
    },
})

const ResetForm = ({
    classes,
    className: classNameProp,
    errorMessage,
    errors,
    handleFieldChange,
    hasFieldError,
    isSubmitting,
    handleFormSubmit,
    status,
    values,
}) => {
    const className = classNames(classes.root, classNameProp)
    return (
        <div className={className}>
            {status === FORM_ACTION_ERROR_STATUS && errorMessage ? (
                <Typography className={classes.errorMessage} color="error" align="center">
                    {errorMessage}
                </Typography>
            ) : null}
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <FormControl className={classes.formControl} fullWidth error={hasFieldError('email')}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        value={values.email}
                        onChange={handleFieldChange}
                        margin="normal"
                        error={hasFieldError('email')}
                        inputProps={{
                            maxLength: 256,
                        }}
                    />
                    {hasFieldError('email') ? <FormHelperText>{errors.email}</FormHelperText> : null}
                </FormControl>
                <FormControl className={classes.formControlButton} fullWidth>
                    <Button
                        autoFocus
                        type="submit"
                        variant="raised"
                        disabled={isSubmitting}
                        size="large"
                        color="primary"
                    >
                        Reset Password
                    </Button>
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                    <Typography>
                        Wrong place? <RouterLink to="/login">Back to login</RouterLink>
                    </Typography>
                </FormControl>
            </form>
        </div>
    )
}

ResetForm.propTypes = {
    apiCallError: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    errors: PropTypes.object,
    handleCheckboxChange: PropTypes.func,
    handleFieldChange: PropTypes.func,
    hasFieldError: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    rememberMe: PropTypes.bool,
    onReset: PropTypes.func,
    status: PropTypes.string,
    values: PropTypes.object,
}

ResetForm.defaultProps = {}

export default withStyles(styles)(ResetForm)
