import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

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

const NewPasswordForm = ({
    classes,
    className: classNameProp,
    errors,
    handleFieldChange,
    hasFieldError,
    isSubmitting,
    handleFormSubmit,
    values,
}) => {
    const className = classNames(classes.root, classNameProp)
    return (
        <div className={className}>
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <FormControl className={classes.formControl} fullWidth error={hasFieldError('password')}>
                    <TextField
                        id="password-input"
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={handleFieldChange}
                        type="password"
                        autoComplete="password"
                        error={hasFieldError('password')}
                        margin="normal"
                        inputProps={{
                            maxLength: 1024,
                        }}
                    />
                    {hasFieldError('password') ? <FormHelperText>{errors.password}</FormHelperText> : null}
                </FormControl>
                <FormControl className={classes.formControl} fullWidth error={hasFieldError('repeatPassword')}>
                    <TextField
                        id="repeatPassword"
                        name="repeatPassword"
                        label="Repeat Password"
                        value={values.repeatPassword}
                        onChange={handleFieldChange}
                        type="password"
                        autoComplete="repeatPassword"
                        error={hasFieldError('repeatPassword')}
                        margin="normal"
                        inputProps={{
                            maxLength: 1024,
                        }}
                    />
                    {hasFieldError('repeatPassword') ? <FormHelperText>{errors.repeatPassword}</FormHelperText> : null}
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
            </form>
        </div>
    )
}

NewPasswordForm.propTypes = {
    actions: PropTypes.object,
    classes: PropTypes.object,
    className: PropTypes.string,
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

NewPasswordForm.defaultProps = {}

export default withStyles(styles)(NewPasswordForm)
