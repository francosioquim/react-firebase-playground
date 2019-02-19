import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { FORM_ACTION_ERROR_STATUS } from 'constants/form'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
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
})

const LoginForm = ({
    classes,
    className: classNameProp,
    errorMessage,
    errors,
    handleFieldChange,
    hasFieldError,
    handleCheckboxChange,
    isSubmitting,
    handleFormSubmit,
    rememberMe,
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
                <FormControl className={classes.formControl} fullWidth>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberMe}
                                onChange={handleCheckboxChange}
                                value="rememberMe"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                    <Button
                        autoFocus
                        type="submit"
                        variant="raised"
                        disabled={isSubmitting}
                        size="large"
                        color="primary"
                    >
                        Sign in
                    </Button>
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                    <Typography>
                        <div to="/reset">Forgot password?</div>
                    </Typography>
                </FormControl>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
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
    onLogin: PropTypes.func,
    status: PropTypes.string,
    values: PropTypes.object,
}

LoginForm.defaultProps = {}

export default withStyles(styles)(LoginForm)
